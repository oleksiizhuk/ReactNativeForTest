import React, { memo } from 'react'
import { ScrollView, StyleSheet, Text } from 'react-native'

export const JSAsynkScreen = memo(() => {
  console.log('console.log')

  setTimeout(() => console.log('setTimeout'), 0)

  new Promise((res) => {
    res('')
  }).then(() => console.log('Promise'))

  return (
    <ScrollView style={styles.container}>
      <Text>console.log: 1</Text>
      <Text>Promise: 2</Text>
      <Text>setTimeout: 3</Text>
    </ScrollView>
  )
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
})
