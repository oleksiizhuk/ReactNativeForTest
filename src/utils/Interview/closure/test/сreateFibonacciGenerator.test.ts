import { createFibonacciGenerator } from '../сreateFibonacciGenerator'

describe('createFibonacciGenerator', () => {
  it('should work', () => {
    const func = createFibonacciGenerator(0, 1)
    expect(func()).toEqual(1)
    expect(func()).toEqual(2)
    expect(func()).toEqual(3)
    expect(func()).toEqual(5)
    expect(func()).toEqual(8)
  })
})
