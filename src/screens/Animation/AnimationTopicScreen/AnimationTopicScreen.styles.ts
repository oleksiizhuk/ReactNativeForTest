import { StyleSheet } from 'react-native';
import useTheme from '../../../hooks/useTheme/useTheme';

export const useStyles = () => {
  const { Colors } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.background,
    },
    content: {
      paddingHorizontal: 16,
      paddingBottom: 40,
    },
    header: {
      paddingTop: 20,
      paddingBottom: 30,
      paddingHorizontal: 4,
    },
    headerTitle: {
      fontSize: 32,
      fontWeight: 'bold',
      color: Colors.text,
      marginBottom: 8,
    },
    headerSubtitle: {
      fontSize: 16,
      color: Colors.textMuted,
      lineHeight: 24,
    },
    headerAccent: {
      color: Colors.accent,
      fontWeight: '600',
    },
    section: {
      marginBottom: 24,
    },
    sectionHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 12,
      paddingHorizontal: 4,
    },
    sectionIcon: {
      fontSize: 20,
      marginRight: 10,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: '600',
      color: Colors.text,
    },
    sectionDescription: {
      fontSize: 13,
      color: Colors.textMuted,
      marginLeft: 30,
      marginBottom: 12,
    },
    cardsRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginHorizontal: -6,
    },

    divider: {
      height: 1,
      backgroundColor: Colors.cardBorder,
      marginVertical: 20,
      marginHorizontal: 20,
    },
    // Color utilities for card icons
    bgPrimary: { backgroundColor: Colors.primaryLight },
    bgSecondary: { backgroundColor: Colors.secondaryLight },
    bgAccent: { backgroundColor: Colors.accentLight },
    bgSuccess: { backgroundColor: Colors.successLight },
    bgWarning: { backgroundColor: Colors.warningLight },
    bgPink: { backgroundColor: Colors.pinkLight },
    badgePrimary: { backgroundColor: Colors.primaryLight },
    badgeSuccess: { backgroundColor: Colors.successLight },
    badgeWarning: { backgroundColor: Colors.warningLight },
    buttonContainer: {
      marginBottom: 16,
    },
  });

  return styles;
};
