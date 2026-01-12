import { Dimensions } from 'react-native';

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

export const COLORS = {
  background: '#1a1a2e',
  card: '#16213e',
  primary: '#e94560',
  secondary: '#0f3460',
  accent: '#00d9ff',
  text: '#ffffff',
  textMuted: '#888888',
  success: '#4ade80',
  warning: '#f59e0b',
};

export const BOX_SIZE = 100;
export const SWIPE_THRESHOLD = SCREEN_WIDTH * 0.3;