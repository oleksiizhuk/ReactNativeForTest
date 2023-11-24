import { upperFirstLetter, upperFirstLetter2 } from './upperFirstLetter'

describe('UpperFirstLetter', () => {
  it('Should return first letter uppercase', () => {
    expect(upperFirstLetter('oleksii')).toEqual('Oleksii')
  })
  it('Should return first letter uppercase second variant', () => {
    expect(upperFirstLetter2('oleksii')).toEqual('Oleksii')
  })
})
