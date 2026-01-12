import { StyleSheet } from 'react-native';
import { ITEM_WIDTH } from './CarouselFlatListScreen.constants';

export const useStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f5f5f5',
    },
    card: {
      width: ITEM_WIDTH,
      height: 200,
      marginHorizontal: 10,
      backgroundColor: '#002f6c',
      borderRadius: 16,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOpacity: 0.3,
      shadowRadius: 8,
      shadowOffset: { width: 0, height: 4 },
      elevation: 5,
    },
    cardText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });
};
