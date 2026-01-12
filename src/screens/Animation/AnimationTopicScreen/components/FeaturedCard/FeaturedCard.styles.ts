import { StyleSheet } from 'react-native';
import useTheme from '../../../../../hooks/useTheme/useTheme';

export const useStyles = () => {
  const { Colors } = useTheme();

  const styles = StyleSheet.create({
    featuredCard: {
      backgroundColor: Colors.card,
      borderRadius: 20,
      padding: 20,
      borderWidth: 1,
      borderColor: Colors.primary,
      marginBottom: 12,
    },
    featuredHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 12,
    },
    featuredIconContainer: {
      width: 56,
      height: 56,
      borderRadius: 16,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 14,
    },
    featuredIcon: {
      fontSize: 28,
    },
    featuredTextContainer: {
      flex: 1,
    },
    featuredTitle: {
      fontSize: 18,
      fontWeight: '700',
      color: Colors.text,
      marginBottom: 4,
    },
    featuredSubtitle: {
      fontSize: 13,
      color: Colors.textMuted,
    },
    featuredDescription: {
      fontSize: 14,
      color: Colors.textMuted,
      lineHeight: 22,
    },
    featuredBadge: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: Colors.primaryLight,
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 8,
      alignSelf: 'flex-start',
      marginTop: 12,
    },
    featuredBadgeText: {
      fontSize: 12,
      color: Colors.primary,
      fontWeight: '600',
    },
  });

  return styles;
};
