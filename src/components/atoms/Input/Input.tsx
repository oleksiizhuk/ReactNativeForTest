import React, { memo } from 'react';
import { TextInput, View, StyleSheet, Text } from 'react-native';

interface InputProps {
  value: string;
  label?: string;
  error?: string;
  onChangeText: (text: string) => void;
}
export const Input = memo<InputProps>(
  ({ value, onChangeText, label, error }) => {
    return (
      <View>
        {label ? (
          <View style={styles.labelContainer}>
            <Text style={styles.labelText}>{label}</Text>
          </View>
        ) : null}
        <View style={styles.inputContainer}>
          <TextInput
            value={value}
            onChangeText={onChangeText}
            style={styles.input}
          />
        </View>
        {error ? (
          <View>
            <Text style={styles.errorText}>{error}</Text>
          </View>
        ) : null}
      </View>
    );
  },
);

const styles = StyleSheet.create({
  labelContainer: {},
  labelText: {},
  inputContainer: {
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 12,
  },
  input: {
    padding: 12,
  },
  errorText: {
    color: 'red',
  },
});
