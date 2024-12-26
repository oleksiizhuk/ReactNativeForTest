import { StyleSheet } from 'react-native'

export const BoardTemplateStyles = () => {
  return StyleSheet.create({
    container: {
      marginHorizontal: 8,
      flex: 1,
    },
    deskContainer: {
      flexDirection: 'row',
      minHeight: '50%',
    },
  })
}
