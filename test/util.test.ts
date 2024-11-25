import { describe, expect, it } from 'vitest'
import {
  convertCamelCase,
  getRightSection,
  upperFirst,
} from '../src/util'

describe('/src/util.ts', () => {
  it('getRightSection', () => {
    expect(getRightSection('example.com/path/to/file.txt', -1))
      .equals('txt')

    expect(getRightSection('example.com/path.to/file.txt', 0))
      .equals('example.com/path.to/file.txt')

    expect(getRightSection('example.com/path.to/file.txt', 3))
      .equals('txt')

    expect(() => getRightSection('example.com/path.to/file.txt', 5))
      .toThrow('Invalid dot index, dotIndex:too large')
  })

  it('convertCamelCase', () => {
    expect(convertCamelCase('example.com/path.to/file txt'.replaceAll('/', '.')))
      .toEqual('exampleComPathToFileTxt')
  })

  it('upperFirst', () => {
    const varcamel = convertCamelCase('example.com/path.to/file txt'.replaceAll('/', '.'))
    const varpascal = upperFirst(varcamel)
    expect(varpascal).toEqual('ExampleComPathToFileTxt')
  })

  it('getConfigInfo', () => {

  })
})
