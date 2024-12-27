import { add3dotsFormatter } from '@/utils/functions'

describe('add3dotsFormatter', () => {
  it('should truncate text and add 3 dots if the text length exceeds the specified limit', () => {
    const result = add3dotsFormatter('Hello, World!', 5)
    expect(result).toBe('Hello...')
  })

  it('should return the original text if its length is less than or equal to the specified limit', () => {
    const result = add3dotsFormatter('Short', 10)
    expect(result).toBe('Short')
  })

  it('should use the default length of 10 if no length is specified and truncate accordingly', () => {
    const result = add3dotsFormatter('Hello, World!')
    expect(result).toBe('Hello, Wor...')
  })
})
