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
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > maxValue) {
      maxValue = arguments[i]
    }
  }
  return maxValue
}
