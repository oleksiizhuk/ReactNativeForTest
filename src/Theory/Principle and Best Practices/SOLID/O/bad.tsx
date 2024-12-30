import React from 'react'
import { View, Text, Button } from 'react-native'

export const Notification = ({ type }: { type: 'email' | 'sms' | 'push' }) => {
  const renderNotification = () => {
    if (type === 'email') {
      return <Text>Email Notification Sent!</Text>
    } else if (type === 'sms') {
      return <Text>SMS Notification Sent!</Text>
    } else if (type === 'push') {
      return <Text>Push Notification Sent!</Text>
    }
  }

  return (
    <View>
      {renderNotification()}
      <Button title="Send Notification" onPress={() => {}} />
    </View>
  )
}
