import { StyleSheet } from 'react-native'
import { useTheme } from '../../../hooks'

export const LowCouplingStyles = () => {
  const { darkMode: isDark } = useTheme()

  return StyleSheet.create({
    container: {
      padding: 20,
      flex: 1,
      backgroundColor: isDark ? '#121212' : '#fff',
    },
  })
}
