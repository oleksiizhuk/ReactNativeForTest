import React, { memo, forwardRef } from 'react';
import { TextInput, View, StyleSheet, Text } from 'react-native';

interface InputProps {
  value: string;
  label?: string;
  error?: string;
  placeholder?: string;
  onChangeText: (text: string) => void;
  inputStyle?: object;
  containerStyle?: object;
  errorTextStyle?: object;
  keyboardType?: 'default' | 'numeric' | 'email-address' | 'phone-pad';
}

export const Input = memo(
  forwardRef<TextInput, InputProps>(
    (
      {
        value,
        onChangeText,
        label,
        error,
        placeholder,
        inputStyle,
        containerStyle,
        errorTextStyle,
        keyboardType = 'default',
      },
      ref,
    ) => {
      return (
        <View style={[styles.container, containerStyle]}>
          {label && (
            <View style={styles.labelContainer}>
              <Text style={styles.labelText}>{label}</Text>
            </View>
          )}
          <View style={styles.inputContainer}>
            <TextInput
              placeholder={placeholder}
              value={value}
              onChangeText={onChangeText}
              style={[styles.input, inputStyle]}
              keyboardType={keyboardType}
              ref={ref}
            />
          </View>
          {error && (
            <View>
              <Text style={[styles.errorText, errorTextStyle]}>{error}</Text>
            </View>
          )}
        </View>
      );
    },
  ),
);

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
  labelContainer: {
    marginBottom: 5,
  },
  labelText: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
  inputContainer: {
    borderWidth: 1.5,
    borderColor: '#2860b4',
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  input: {
    padding: 12,
    fontSize: 14,
    color: '#333',
  },
  errorText: {
    color: '#ff0000',
    fontSize: 12,
    marginTop: 5,
  },
});
