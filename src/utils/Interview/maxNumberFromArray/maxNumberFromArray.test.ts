import {
  maxNumberFromArray,
  maxNumberFromArrayWithArguments,
} from './maxNumberFromArray'

describe('maxNumberFromArray', () => {
  it('maxNumberFromArray', () => {
    expect(maxNumberFromArray(1, 2, 3, 4, 100, 10, 10, 20)).toEqual(100)
  })
  it('maxNumberFromArray with array', () => {
    // @ts-ignore
    expect(maxNumberFromArray(...[1, 2, 3, 4, 100, 10, 10, 200])).toEqual(200)
  })

  it('maxNumberFromArrayWithArguments', () => {
    expect(
      maxNumberFromArrayWithArguments(1, 2, 3, 4, 100, 10, 10, 20),
    ).toEqual(100)
  })
  it('maxNumberFromArrayWithArguments array', () => {
    expect(
      // @ts-ignore
      maxNumberFromArrayWithArguments(...[1, 2, 3, 4, 100, 10, 10, 200]),
    ).toEqual(200)
  })
})
