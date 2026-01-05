import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './FactoryMethod.styles'

interface NotificationProps {
  message: string
}

export const SuccessNotification: React.FC<NotificationProps> = ({
  message,
}) => (
  <View style={[styles.notification, styles.success]}>
    <Text style={styles.text}>✅ Success: {message}</Text>
  </View>
)

export const ErrorNotification: React.FC<NotificationProps> = ({ message }) => (
  <View style={[styles.notification, styles.error]}>
    <Text style={styles.text}>❌ Error: {message}</Text>
  </View>
)

export const WarningNotification: React.FC<NotificationProps> = ({
  message,
}) => (
  <View style={[styles.notification, styles.warning]}>
    <Text style={styles.text}>⚠️ Warning: {message}</Text>
  </View>
)

// Notification Factory
export const NotificationFactory = (
  type: string,
): React.FC<NotificationProps> => {
  switch (type) {
    case 'success':
      return SuccessNotification
    case 'error':
      return ErrorNotification
    case 'warning':
      return WarningNotification
    default:
      throw new Error('Unsupported notification type')
  }
}

export const NotificationSystem: React.FC = () => {
  const notifications = [
    { type: 'success', message: 'Operation completed successfully!' },
    { type: 'error', message: 'An error occurred. Please try again!' },
    { type: 'warning', message: 'This action might have risks.' },
  ]
  return (
    <View style={styles.container}>
      {notifications.map((notification, index) => {
        const NotificationComponent = NotificationFactory(notification.type)
        return (
          <NotificationComponent key={index} message={notification.message} />
        )
      })}
    </View>
  )
}
