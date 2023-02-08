function decimalToHex(num: number) {
  const hex = num.toString(16)
  return hex.length === 1 ? `0${hex}` : hex
}

export function rgbToHex(r: number, g: number, b: number) {
  return `#${decimalToHex(r)}${decimalToHex(g)}${decimalToHex(b)}`
}
