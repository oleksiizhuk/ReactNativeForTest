import { fibonacci } from '../fibonacci'

describe('fibonacci', () => {
  it('fibonacci 5 should return 5', () => {
    expect(fibonacci(5)).toEqual(5)
  })
  it('fibonacci 8 should return 21', () => {
    expect(fibonacci(8)).toEqual(21)
  })
  it('fibonacci 0 should return 0', () => {
    expect(fibonacci(0)).toEqual(0)
  })
  it('fibonacci 1 should return 1', () => {
    expect(fibonacci(1)).toEqual(1)
  })
  it('fibonacci 2 should return 1', () => {
    expect(fibonacci(2)).toEqual(1)
  })
  it('fibonacci 10 should return 55', () => {
    expect(fibonacci(10)).toEqual(55)
  })
})
