import { ViewStyle } from 'react-native';

export enum ButtonType {
  Small = 'small',
  Default = 'default',
}
export interface ButtonProps {
  text: string;
  onPress?: () => void;
  type?: ButtonType.Small | ButtonType.Default;
  styleContainer?: ViewStyle;
  disabled?: boolean;
}
