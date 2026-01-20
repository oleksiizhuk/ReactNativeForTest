import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Button, ButtonType } from '@/components/Atoms';

interface ErrorFallbackProps {
  error: Error | null;
  onReset?: () => void;
}

/**
 * ErrorFallback - The UI shown when an error boundary catches an error
 *
 * This component provides:
 * - User-friendly error message
 * - Technical details (in development mode)
 * - "Try Again" button to reset the error boundary
 */
export const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error, onReset }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>:(</Text>
        <Text style={styles.title}>Something went wrong</Text>
        <Text style={styles.subtitle}>
          The app encountered an unexpected error
        </Text>

        {/* Show error details only in development */}
        {__DEV__ && error && (
          <ScrollView style={styles.errorContainer}>
            <Text style={styles.errorTitle}>Error Details:</Text>
            <Text style={styles.errorName}>{error.name}</Text>
            <Text style={styles.errorMessage}>{error.message}</Text>
            {error.stack && (
              <Text style={styles.errorStack} numberOfLines={10}>
                {error.stack}
              </Text>
            )}
          </ScrollView>
        )}

        {onReset && (
          <Button
            text="Try Again"
            onPress={onReset}
            type={ButtonType.Default}
            styleContainer={styles.button}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  content: {
    alignItems: 'center',
    maxWidth: 400,
  },
  emoji: {
    fontSize: 64,
    marginBottom: 16,
    color: '#dc3545',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#212529',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#6c757d',
    textAlign: 'center',
    marginBottom: 24,
  },
  errorContainer: {
    backgroundColor: '#fff3cd',
    borderRadius: 8,
    padding: 16,
    marginBottom: 24,
    maxHeight: 200,
    width: '100%',
  },
  errorTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#856404',
    marginBottom: 8,
  },
  errorName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#dc3545',
    marginBottom: 4,
  },
  errorMessage: {
    fontSize: 14,
    color: '#856404',
    marginBottom: 8,
  },
  errorStack: {
    fontSize: 10,
    color: '#856404',
    fontFamily: 'monospace',
  },
  button: {
    minWidth: 200,
  },
});