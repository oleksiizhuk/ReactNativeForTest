class Calculator {
  add(a: number, b: number): number
  // eslint-disable-next-line no-dupe-class-members
  add(a: number, b: number, c: number): number

  // Single implementation
  // eslint-disable-next-line no-dupe-class-members
  add(a: number, b: number, c?: number): number {
    if (c !== undefined) {
      return a + b + c
    }
    return a + b
  }
}

const calc = new Calculator()
console.log(calc.add(1, 2)) // 3
console.log(calc.add(1, 2, 3)) // 6

export {}
