export function factorial(n: number): number {
  if (n === 0) {
    return 1
  }
  return n * factorial(n - 1)
}

console.log(factorial(5)) // Должно вернуть факториал 120
console.log(factorial(3)) // Должно вернуть факториал 6
