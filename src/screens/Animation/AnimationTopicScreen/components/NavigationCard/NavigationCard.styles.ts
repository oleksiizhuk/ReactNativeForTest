import { StyleSheet, Dimensions } from 'react-native';
import { useTheme } from '@hooks/useTheme/useTheme';

const { width } = Dimensions.get('window');

export const useStyles = () => {
  const { Colors } = useTheme();

  const styles = StyleSheet.create({
    cardsRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginHorizontal: -6,
    },
    cardWrapper: {
      width: (width - 32 - 12) / 2,
      paddingHorizontal: 6,
      marginBottom: 12,
    },
    cardWrapperFull: {
      width: '100%',
      paddingHorizontal: 6,
      marginBottom: 12,
    },
    card: {
      backgroundColor: Colors.card,
      borderRadius: 16,
      padding: 16,
      borderWidth: 1,
      borderColor: Colors.cardBorder,
    },
    cardFeatured: {
      borderColor: Colors.primary,
      borderWidth: 1.5,
    },
    cardIconContainer: {
      width: 44,
      height: 44,
      borderRadius: 12,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 12,
    },
    cardIcon: {
      fontSize: 22,
    },
    cardTitle: {
      fontSize: 15,
      fontWeight: '600',
      color: Colors.text,
      marginBottom: 4,
    },
    cardDescription: {
      fontSize: 12,
      color: Colors.textMuted,
      lineHeight: 18,
    },
    cardBadge: {
      position: 'absolute',
      top: 12,
      right: 12,
      paddingHorizontal: 8,
      paddingVertical: 3,
      borderRadius: 6,
    },
    cardBadgeText: {
      fontSize: 10,
      fontWeight: '600',
      color: Colors.text,
    },
  });

  return styles;
};
