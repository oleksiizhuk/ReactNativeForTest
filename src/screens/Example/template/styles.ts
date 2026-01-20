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
    sparkleBottomLeft: {
      bottom: '-30%',
      left: 0,
    },
    brandContainer: {
      height: 300,
      width: 300,
      transform: [{ translateY: 40 }],
    },
    sparkleTopLeft: {
      top: 0,
      left: 0,
    },
    sparkleTop: {
      top: '-5%',
      right: 0,
    },
    sparkleTopRight: {
      top: '15%',
      right: 20,
    },
    sparkleRight: {
      bottom: '-10%',
      right: 0,
    },
    sparkleBottom: {
      top: '75%',
      right: 0,
    },
    sparkleBottomRight: {
      top: '60%',
      right: 0,
    },
  })
}
