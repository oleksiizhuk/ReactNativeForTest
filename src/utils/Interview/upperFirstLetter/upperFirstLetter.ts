export const upperFirstLetter = (word: string) => {
  const [firstLetter, ...rest] = word
  return firstLetter.toUpperCase().concat(rest.join(''))
}

export const upperFirstLetter2 = (word: string) => {
  return word[0].toUpperCase().concat(word.slice(1))
}
