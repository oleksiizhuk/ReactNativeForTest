import React, { useState } from 'react'
import { City } from '../../../constant/city'
import { Text, View } from 'react-native'

export const BigComponent = () => {
  const [items] = useState<string[]>([...City, ...City, ...City])

  return (
    <View>
      {items.map((item: string, index: number) => (
        <View key={index}>
          <Text>{item}</Text>
        </View>
      ))}
    </View>
  )
}
