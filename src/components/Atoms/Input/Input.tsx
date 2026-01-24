import React, { memo, forwardRef } from 'react';
import { TextInput, View, StyleSheet, Text } from 'react-native';
import { mergeTestId } from '@utils/mergeTestId.ts';

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
  testID: string;
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
        testID,
      },
      ref,
    ) => {
      return (
        <View
          style={[styles.container, containerStyle]}
          testID={mergeTestId('container', testID)}
        >
          {label && (
            <View
              style={styles.labelContainer}
              testID={mergeTestId('label-container', testID)}
            >
              <Text
                style={styles.labelText}
                testID={mergeTestId('label-text', testID)}
              >
                {label}
              </Text>
            </View>
          )}
          <View
            style={styles.inputContainer}
            testID={mergeTestId('input-container', testID)}
          >
            <TextInput
              placeholder={placeholder}
              value={value}
              onChangeText={onChangeText}
              style={[styles.input, inputStyle]}
              keyboardType={keyboardType}
              ref={ref}
              testID={mergeTestId('input', testID)}
            />
          </View>
          {error && (
            <View>
              <Text
                style={[styles.errorText, errorTextStyle]}
                testID={mergeTestId('error-text', testID)}
              >
                {error}
              </Text>
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
    flex: 1,
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
