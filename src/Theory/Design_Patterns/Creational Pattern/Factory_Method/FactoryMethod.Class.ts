interface Notification {
  send(message: string): void
}

// Concrete Product: Success Notification
class SuccessNotification implements Notification {
  send(message: string): void {
    console.log(`✅ Success: ${message}`)
  }
}

// Concrete Product: Error Notification
class ErrorNotification implements Notification {
  send(message: string): void {
    console.log(`❌ Error: ${message}`)
  }
}

// Concrete Product: Warning Notification
class WarningNotification implements Notification {
  send(message: string): void {
    console.log(`⚠️ Warning: ${message}`)
  }
}

// Factory Class
class NotificationFactory {
  static createNotification(type: string): Notification {
    switch (type) {
      case 'success':
        return new SuccessNotification()
      case 'error':
        return new ErrorNotification()
      case 'warning':
        return new WarningNotification()
      default:
        throw new Error('Unsupported notification type')
    }
  }
}

// Client Code
const successNotification = NotificationFactory.createNotification('success')
successNotification.send('Operation completed successfully!')

const errorNotification = NotificationFactory.createNotification('error')
errorNotification.send('An error occurred while processing your request.')

const warningNotification = NotificationFactory.createNotification('warning')
warningNotification.send('Please check your inputs.')

export {}
