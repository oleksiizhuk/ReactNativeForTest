export const createFibonacciGenerator = (a: number, b: number): Function => {
  const fibonacci = [a, b]
  return () => {
    fibonacci.push(
      fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2],
    )
    return fibonacci[fibonacci.length - 1]
  }
}
