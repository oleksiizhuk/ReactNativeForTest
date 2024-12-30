import React from 'react'
import { View, Text, Button } from 'react-native'

function Swimmer({ swim }: { swim: () => void }) {
  return (
    <View>
      <Text>Swimmer</Text>
      <Button title="Swim" onPress={swim} />
    </View>
  )
}

function Flyer({ fly }: { fly: () => void }) {
  return (
    <View>
      <Text>Flyer</Text>
      <Button title="Fly" onPress={fly} />
    </View>
  )
}

export function Main() {
  return (
    <View>
      <Swimmer swim={() => console.log('Swimming')} />
      <Flyer fly={() => console.log('Flying')} />
    </View>
  )
}
