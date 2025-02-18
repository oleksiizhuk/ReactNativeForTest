// 0 1 1 2 3 5 8 13 21
export const fibonacci = (n: number): number => {
  if (n === 0) {
    return 0
  }
  if (n === 1) {
    return 1
  }

  return fibonacci(n - 1) + fibonacci(n - 2)
}
