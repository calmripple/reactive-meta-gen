import type { ConfigurationProperty } from './types'
import { assign, camel, isArray, memo } from 'radash'

export function isProperty(propterty: ConfigurationProperty): propterty is ConfigurationProperty {
  if (propterty.type) {
    const typeName = typeof propterty?.type
    return (typeName === 'string' || isArray(propterty.type))
  }
  if (propterty.anyOf) {
    return propterty.anyOf.every(v => isProperty(v))
  }

  return false
}

export const convertCamelCase = memo((input: string) => {
  if (input.match(/^[a-z0-9$]*$/i) && !input.match(/^\d/)) // Valid JS identifier, keep as-is
    return input
  return camel(input)
})

export const upperFirst = memo(<S extends string>(str: S): Capitalize<S> => {
  return (str ? str[0].toUpperCase() + str.slice(1) : '') as Capitalize<S>
})

export const getConfigObject = memo((packageJson: any): Record<string, ConfigurationProperty> => {
  const conf = packageJson.contributes?.configuration
  return (isArray(conf)
    ? conf.reduce((acc, cur) => assign(acc, cur), {}).properties
    : packageJson.contributes?.configuration?.properties
  ) || {}
})

export function addOrUpdate<T>(target: Map<string, T[]>, section: string, value: T): Map<string, T[]> {
  const properties = target.get(section)
  if (properties) {
    properties.push(value)
  }
  else {
    target.set(section, [value])
  }
  return target
}
function getSectionFromObject(obj: ConfigurationProperty) {
  if (isProperty(obj) && obj.type === 'object' && obj.properties) {
    const list = new Map<string, ConfigurationProperty>()
    for (const [key, value] of Object.entries(obj.properties)) {
      if (isProperty(value) && value.type === 'object' && value.properties) {
        const inner = getSectionFromObject(value)
        if (inner !== undefined) {
          [...inner.entries()].forEach(([innerKey, innerValue]) => {
            list.set(`${key}.${innerKey}`, innerValue)
          })
        }
      }
      else {
        list.set(key, value)
      }
    }
    return list
  }
  return undefined
}
export const getConfigInfo = memo(
  (packageJson: any, allSections?: boolean) => {
    const deprecatedConfigs = new Map<string, ConfigurationProperty>()
    const deprecatedKeys = new Array<string>()
    const activedConfigs = new Map<string, ConfigurationProperty>()
    const activedKeys = new Array<string>()
    const activedSectionConfigs = new Map<string, [string, ConfigurationProperty][]>()

    // const virtualActivedConfigs = new Map<string, ConfigurationProperty>()
    // const virtualActivedKeys = new Array<string>()
    const virtualActivedSectionConfigs = new Map<string, [string, ConfigurationProperty][]>()

    function handleVirtualSection(section: string, value: ConfigurationProperty) {
      const virtualSections = getSectionFromObject(value)
      if (virtualSections !== undefined) {
        [...virtualSections.entries()].forEach(([key, value]) => {
          addOrUpdate(virtualActivedSectionConfigs, section, [key, value])
        })
      }
    }
    function handleRealSection(fullKey: string, value: ConfigurationProperty) {
      activedConfigs.set(fullKey, value)
      activedKeys.push(fullKey)
      const parts = fullKey.split('.')
      if (parts.length >= 2) {
        if (allSections) {
          const sectionParts = parts.slice(0, -1)
          for (let i = 0; i < sectionParts.length; i++) {
            const section = (sectionParts.slice(0, i + 1).join('.'))
            addOrUpdate(activedSectionConfigs, section, [fullKey, value])
          }
        }
        else {
          addOrUpdate(activedSectionConfigs, parts.slice(0, -1).join('.'), [fullKey, value])
        }
      }
      else {
        const section = ('')
        addOrUpdate(activedSectionConfigs, section, [fullKey, value])
      }
    }
    Object.entries(getConfigObject(packageJson)).forEach(([fullKey, value]) => {
      if (isProperty(value)) {
        handleRealSection(fullKey, value)

        if (isProperty(value) && value.type === 'object' && value.properties) {
          handleVirtualSection(fullKey, value)
        }
      }
      else {
        deprecatedConfigs.set(fullKey, value)
        deprecatedKeys.push(fullKey)
      }
    })
    return {
      deprecatedConfigs,
      deprecatedKeys,

      activedConfigs,
      activedKeys,
      activedSectionConfigs,

      virtualActivedSectionConfigs,
    }
  },
)

export function randomString(length: number): string {
  const possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let text = ''
  for (let i = 0; i < length; i++) {
    text += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length))
  }
  return text
}

export function getRightSection(str: string, dotIndex: number): string {
  if (typeof str !== 'string' || typeof dotIndex !== 'number') {
    throw new TypeError('Invalid input')
  }
  const parts = str.split(/[.\n\r ]/g)

  if (dotIndex < 0) {
    const indexFromRight = parts.length + dotIndex
    if (indexFromRight < 0) {
      throw new Error('Invalid dot index, dotIndex:too small')
    }
    return parts.slice(indexFromRight).join('.')
  }
  else {
    if (dotIndex > parts.length)
      throw new Error('Invalid dot index, dotIndex:too large')
    return parts.slice(dotIndex).join('.')
  }
}
