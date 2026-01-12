import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const ITEM_WIDTH = width * 0.8; // Ширина карточки
export const ITEM_SPACING = (width - ITEM_WIDTH) / 2; // Отступ между карточками
