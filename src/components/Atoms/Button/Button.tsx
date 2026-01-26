import React, { memo } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { ButtonType, ButtonProps } from './Button.types';

export const Button = memo<ButtonProps>(
  ({ text, onPress, type = ButtonType.Default, styleContainer, disabled, testID }) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles[`${type}Container`],
          disabled && styles.containerDisabled,
          styleContainer,
        ]}
        disabled={disabled}
        testID={testID}
      >
        <Text style={[styles[`${type}Text`], disabled && styles.textDisabled]}>
          {text}
        </Text>
      </TouchableOpacity>
    );
  },
);

const styles = StyleSheet.create({
  [`${ButtonType.Default}Container`]: {
    borderWidth: 1,
    borderColor: '#004aad',
    backgroundColor: '#ffffff',
    padding: 20,
    alignItems: 'center',
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  [`${ButtonType.Small}Container`]: {
    borderWidth: 1,
    borderColor: '#004aad',
    backgroundColor: '#ffffff',
    padding: 12,
    alignItems: 'center',
    borderRadius: 30,
    width: 140,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  containerDisabled: {
    borderColor: '#aaa',
    backgroundColor: '#eee',
    elevation: 0,
  },
  [`${ButtonType.Default}Text`]: {
    fontSize: 18,
    lineHeight: 22,
    color: '#004aad',
    textAlign: 'center',
  },
  [`${ButtonType.Small}Text`]: {
    fontSize: 16,
    lineHeight: 20,
    color: '#004aad',
    textAlign: 'center',
  },
  textDisabled: {
    color: '#aaa',
  },
});
