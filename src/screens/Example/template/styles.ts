import { StyleSheet } from 'react-native'
import { useTheme } from '@hooks/index.ts'

export const ExampleStyles = () => {
  const { darkMode: isDark } = useTheme()
  return StyleSheet.create({
    absolute: {
      height: 250,
      width: 250,
      backgroundColor: isDark ? '#000000' : '#DFDFDF',
      borderRadius: 140,
    },
    iconBackground: {
      tintColor: isDark ? '#A6A4F0' : '#44427D',
    },
  })
}
