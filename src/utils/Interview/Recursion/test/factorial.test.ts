import { factorial } from '../factorial'

describe('factorial', () => {
  it('factorial 5 should return 120', () => {
    expect(factorial(5)).toEqual(120)
  })
  it('factorial 3 should return 6', () => {
    expect(factorial(3)).toEqual(6)
  })
  it('factorial 6 should return 720', () => {
    expect(factorial(6)).toEqual(720)
  })
  it('factorial 0 should return 1', () => {
    expect(factorial(0)).toEqual(1)
  })
  it('factorial 1 should return 1', () => {
    expect(factorial(1)).toEqual(1)
  })
})
