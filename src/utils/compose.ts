const compose = (...fns: any[]) =>
  fns.reduceRight(
    (f, g) =>
      (...args: any[]) =>
        f(g(...args)),
  )

const addStringToEnd = (str: string) => {
  console.log('addStringToEnd')
  return str.concat('-end')
}
const addStringToStart = (str: string) => {
  console.log('addStringToStart')
  return 'start-'.concat(str)
}

const result = compose(addStringToEnd, addStringToStart)('Hello')

console.log('result = ', result)

export {}
