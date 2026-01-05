import React from 'react'
import { View, Text } from 'react-native'

const EmailNotification = () => <Text>Email Notification Sent!</Text>
const SmsNotification = () => <Text>SMS Notification Sent!</Text>
const PushNotification = () => <Text>Push Notification Sent!</Text>

const Notification = ({
  NotificationComponent,
}: {
  NotificationComponent: React.FC
}) => {
  return <NotificationComponent />
}

export const App = () => {
  return (
    <View>
      {/* Email Notification */}
      <Notification NotificationComponent={EmailNotification} />
      {/* SMS Notification */}
      <Notification NotificationComponent={SmsNotification} />
      {/* Push Notification */}
      <Notification NotificationComponent={PushNotification} />
    </View>
  )
}
