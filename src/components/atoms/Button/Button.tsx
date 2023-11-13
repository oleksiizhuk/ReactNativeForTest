import React, { memo } from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';

enum ButtonType {
  Small = 'small',
  Default = 'default',
}
interface ButtonProps {
  text: string;
  onPress?: () => void;
  type?: ButtonType.Small | ButtonType.Default;
  styleContainer?: ViewStyle;
}

export const Button = memo<ButtonProps>(
  ({ text, onPress, type = ButtonType.Default, styleContainer }) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles[`${type}Container`], styleContainer]}
      >
        <Text style={[styles[`${type}Text`]]}>{text}</Text>
      </TouchableOpacity>
    );
  },
);

const styles = StyleSheet.create({
  [`${ButtonType.Default}Container`]: {
    borderWidth: 1,
    borderColor: 'red',
    padding: 20,
    alignItems: 'center',
    borderRadius: 24,
  },
  [`${ButtonType.Small}Container`]: {
    borderWidth: 1,
    borderColor: 'red',
    padding: 12,
    alignItems: 'center',
    borderRadius: 24,
    width: 140,
  },
  [`${ButtonType.Default}Text`]: {
    fontSize: 18,
    lineHeight: 22,
    color: 'blue',
    textAlign: 'left',
  },
  [`${ButtonType.Small}Text`]: {
    fontSize: 14,
    lineHeight: 18,
    color: 'blue',
    textAlign: 'left',
  },
});
