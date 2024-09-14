export function getRightSection(str: string, index: number): string {
  if (typeof str !== 'string' || typeof index !== 'number') {
    throw new TypeError('Invalid input')
  }
  const parts = str.split('.')
  if (index < 0) {
    let indexFromRight = 0
    indexFromRight = parts.length + index
    if (indexFromRight < 0) {
      return str
    }
    return parts.slice(indexFromRight).join('.')
  }
  else {
    if (index > parts.length)
      return ''
    return parts.slice(index).join('.')
  }
}
