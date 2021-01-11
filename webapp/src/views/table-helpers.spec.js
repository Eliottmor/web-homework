import { convertToRoman } from './table-helpers.service'

test('10 should convert to Roman numeral X', () => {
  const expected = 'X'
  const convert = true
  const result = convertToRoman(10, convert)
  expect(result).toBe(expected)
})

test('4 should convert to Roman numeral IV', () => {
  const expected = 'IV'
  const convert = true
  const result = convertToRoman(4, convert)
  expect(result).toBe(expected)
})

test('should not convert to roman because convert is false', () => {
  const expected = '10'
  const convert = false
  const result = convertToRoman('10', convert)
  expect(result).toBe(expected)
})
