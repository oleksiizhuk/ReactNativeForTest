export function maxNumberFromArray(first: number, ...rest: number[]) {
  let maxValue = first
  for (let n of rest) {
    if (n > maxValue) {
      maxValue = n
    }
  }
  return maxValue
}

export function maxNumberFromArrayWithArguments(..._rest: number[]) {
  let maxValue = -Infinity
  console.log('Infinity = ', Infinity)
  console.log('arguments = ', arguments as IArguments)
  console.log('arguments = ', typeof arguments)
  const obj = {
    0: 1,
    2: 1,
    3: 1,
  }
  console.log(obj['0'])
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > maxValue) {
      maxValue = arguments[i]
    }
  }
  return maxValue
}
