import { hanoi } from '../hanoi'

describe('hanoi', () => {
  // Функция для записи перемещений
  const recordMoves = jest.fn()

  beforeEach(() => {
    recordMoves.mockReset()
  })

  it('hanoi with 1 disk', () => {
    hanoi(1, 'A', 'B', 'C', recordMoves)
    expect(recordMoves.mock.calls).toEqual([['A', 'C']])
  })

  it('hanoi with 2 disks', () => {
    hanoi(2, 'A', 'B', 'C', recordMoves)
    expect(recordMoves.mock.calls).toEqual([
      ['A', 'B'],
      ['A', 'C'],
      ['B', 'C'],
    ])
  })

  it('hanoi with 3 disks', () => {
    hanoi(3, 'A', 'B', 'C', recordMoves)
    expect(recordMoves.mock.calls).toEqual([
      ['A', 'C'],
      ['A', 'B'],
      ['C', 'B'],
      ['A', 'C'],
      ['B', 'A'],
      ['B', 'C'],
      ['A', 'C'],
    ])
  })
})
