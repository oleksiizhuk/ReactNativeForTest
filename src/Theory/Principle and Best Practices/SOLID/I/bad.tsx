import React from 'react'
import { View, Button } from 'react-native'

type AnimalProps = {
  fly?: () => void
  swim?: () => void
}

function Animal({ fly, swim }: AnimalProps) {
  return (
    <View>
      {fly && <Button title="Fly" onPress={fly} />}
      {swim && <Button title="Swim" onPress={swim} />}
    </View>
  )
}

export function Main() {
  return (
    <View>
      {/* A fish only swims, but the interface also includes "fly" */}
      <Animal swim={() => console.log('Swimming')} />
    </View>
  )
}
