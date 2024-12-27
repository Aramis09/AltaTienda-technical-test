import { prioritiesFormatterVariant } from '@/utils/functions'

describe('prioritiesFormatterVariant', () => {
  it('should return the correct priority value in lowercase', () => {
    const result = prioritiesFormatterVariant('HIGH')
    expect(result).toBe('high')
  })

  it('should return default if the priority is undefined or null', () => {
    const result = prioritiesFormatterVariant(undefined)
    expect(result).toBe('default')

    const result2 = prioritiesFormatterVariant(undefined)
    expect(result2).toBe('default')
  })

  it('should return "default" for an unrecognized priority', () => {
    const result = prioritiesFormatterVariant('UnknownPriority')
    expect(result).toBe('default')
  })
})
