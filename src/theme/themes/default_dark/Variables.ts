import { ThemeNavigationColors } from '@/types/theme'

export const Colors = {
  primary: '#7454a5',
  textGray800: '#E0E0E0',
  textGray400: '#969696',
  textGray200: '#BABABA',
  inputBackground: '#3a3a3a',
  circleButtonBackground: '#252732',
  // UI Colors
  background: '#1B1A23',
  card: '#252732',
  border: '#3a3a4a',
  // Animation Theme Colors (Dark Mode)
  animation: {
    background: '#0f0f1a',
    card: '#1a1a2e',
    cardBorder: '#2d2d44',
    primary: '#6366f1',
    secondary: '#8b5cf6',
    accent: '#06b6d4',
    pink: '#ec4899',
    text: '#ffffff',
    textMuted: '#94a3b8',
    // Transparent backgrounds for icons (slightly brighter for dark mode)
    primaryLight: 'rgba(99, 102, 241, 0.15)',
    secondaryLight: 'rgba(139, 92, 246, 0.15)',
    accentLight: 'rgba(6, 182, 212, 0.15)',
    successLight: 'rgba(34, 197, 94, 0.15)',
    warningLight: 'rgba(245, 158, 11, 0.15)',
    pinkLight: 'rgba(236, 72, 153, 0.15)',
  },
}

export const NavigationColors: Partial<ThemeNavigationColors> = {
  primary: Colors.primary,
  background: '#1B1A23',
  card: '#1B1A23',
}

export default {
  Colors,
  NavigationColors,
}
