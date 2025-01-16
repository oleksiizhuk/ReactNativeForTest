import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  notification: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
  success: {
    backgroundColor: 'green',
  },
  error: {
    backgroundColor: 'red',
  },
  warning: {
    backgroundColor: 'orange',
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
})
