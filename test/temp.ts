export function getRightSection(str: string, dotIndex: number): string {
  if (typeof str !== 'string' || typeof dotIndex !== 'number') {
    throw new TypeError('Invalid input')
  }
  const parts = str.split('.')
  if (dotIndex < 0) {
    let indexFromRight = 0
    indexFromRight = parts.length + dotIndex
    if (indexFromRight < 0) {
      return str
    }
    return parts.slice(indexFromRight).join('.')
  }
  else {
    if (dotIndex > parts.length)
      return ''
    return parts.slice(dotIndex).join('.')
  }
}

console.log(getRightSection('example.com/path/to/file.txt', -1))
console.log(getRightSection('example.com/path.to/file.txt', 0))
console.log(getRightSection('example.com/path.to/file.txt', 3))
