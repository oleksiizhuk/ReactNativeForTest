/**
 * This file contains the application's variables.
 *
 * Define color, sizes, etc. here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */

import { ThemeNavigationColors } from '../../@types/theme'

/**
 * Colors
 */
export const Colors = {
  transparent: 'rgba(0,0,0,0)',
  inputBackground: '#FFFFFF',
  white: '#ffffff',
  black: '#000000',
  //Typography
  textGray800: '#000000',
  textGray400: '#4D4D4D',
  textGray200: '#A1A1A1',
  primary: '#E14032',
  success: '#28a745',
  error: '#dc3545',
  warning: '#f59e0b',
  //ComponentColors
  circleButtonBackground: '#E1E1EF',
  circleButtonColor: '#44427D',
  // UI Colors
  background: '#f5f5f5',
  card: '#ffffff',
  border: '#e0e0e0',
  // Animation Theme Colors
  animation: {
    background: '#f8fafc',
    card: '#ffffff',
    cardBorder: '#e2e8f0',
    primary: '#6366f1',
    secondary: '#8b5cf6',
    accent: '#06b6d4',
    pink: '#ec4899',
    text: '#1e293b',
    textMuted: '#64748b',
    // Transparent backgrounds for icons
    primaryLight: 'rgba(99, 102, 241, 0.12)',
    secondaryLight: 'rgba(139, 92, 246, 0.12)',
    accentLight: 'rgba(6, 182, 212, 0.12)',
    successLight: 'rgba(34, 197, 94, 0.12)',
    warningLight: 'rgba(245, 158, 11, 0.12)',
    pinkLight: 'rgba(236, 72, 153, 0.12)',
  },
}

export const NavigationColors: Partial<ThemeNavigationColors> = {
  primary: Colors.primary,
  background: '#EFEFEF',
  card: '#EFEFEF',
}

/**
 * FontSize
 */
export const FontSize = {
  tiny: 14,
  small: 16,
  regular: 20,
  large: 40,
}

/**
 * Metrics Sizes
 */
const tiny = 10
const small = tiny * 2 // 20
const regular = tiny * 3 // 30
const large = regular * 2 // 60
export const MetricsSizes = {
  tiny,
  small,
  regular,
  large,
}

export default {
  Colors,
  NavigationColors,
  FontSize,
  MetricsSizes,
}
