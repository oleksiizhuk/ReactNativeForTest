import React, { memo } from 'react'
import { StyleSheet, Text } from 'react-native'

interface TitleProps {
  title: string
}
export const Title = memo<TitleProps>(({ title }) => {
  return <Text style={styles.text}>{title}</Text>
})

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginVertical: 10,
    textTransform: 'uppercase',
  },
})
