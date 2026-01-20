import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Button, ButtonType } from '@/components/Atoms';
import { ErrorBoundary } from '@/components/Molecules';

/**
 * ERROR BOUNDARY DEMO SCREEN
 *
 * This screen demonstrates different Error Boundary patterns:
 *
 * 1. GLOBAL ERROR BOUNDARY (already in App.tsx)
 *    - Catches any unhandled error in the entire app
 *    - Shows full-screen error UI
 *    - Last line of defense
 *
 * 2. SCREEN-LEVEL ERROR BOUNDARY
 *    - Wraps individual screens or features
 *    - Allows other parts of the app to continue working
 *    - Better user experience
 *
 * 3. COMPONENT-LEVEL ERROR BOUNDARY
 *    - Wraps risky components (3rd party, complex logic)
 *    - Most granular control
 *    - Minimizes error impact
 */

// A component that deliberately throws an error
const BuggyCounter: React.FC<{ shouldThrow: boolean }> = ({ shouldThrow }) => {
  if (shouldThrow) {
    throw new Error('BuggyCounter crashed! This is an intentional error for demo purposes.');
  }
  return (
    <View style={styles.safeComponent}>
      <Text style={styles.safeText}>Counter is working fine</Text>
    </View>
  );
};

// A custom inline fallback for component-level errors
const InlineFallback: React.FC<{ onReset: () => void }> = ({ onReset }) => (
  <View style={styles.inlineFallback}>
    <Text style={styles.inlineErrorText}>This component crashed</Text>
    <Button text="Reset" onPress={onReset} type={ButtonType.Small} />
  </View>
);

export const ErrorBoundaryScreen: React.FC = () => {
  const [triggerError, setTriggerError] = useState(false);
  const [key, setKey] = useState(0);

  const handleTriggerError = () => {
    setTriggerError(true);
  };

  const handleReset = () => {
    setTriggerError(false);
    setKey(prev => prev + 1); // Force remount
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>Error Boundary Demo</Text>
        <Text style={styles.description}>
          Error Boundaries catch JavaScript errors in their child component tree,
          log those errors, and display a fallback UI.
        </Text>
      </View>

      {/* PATTERN 1: Component-level Error Boundary with custom fallback */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>1. Component-Level Boundary</Text>
        <Text style={styles.sectionDesc}>
          Wraps a single risky component. When it crashes, only that component shows an error.
        </Text>

        <ErrorBoundary
          key={key}
          fallback={<InlineFallback onReset={handleReset} />}
          onError={(error) => console.log('Component error:', error.message)}
          onReset={handleReset}
        >
          <BuggyCounter shouldThrow={triggerError} />
        </ErrorBoundary>

        <Button
          text="Trigger Error"
          onPress={handleTriggerError}
          type={ButtonType.Small}
          styleContainer={styles.button}
        />
      </View>

      {/* PATTERN 2: Multiple isolated boundaries */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>2. Isolated Components</Text>
        <Text style={styles.sectionDesc}>
          Each component has its own boundary. One crash doesn't affect others.
        </Text>

        <View style={styles.row}>
          <ErrorBoundary fallback={<Text style={styles.miniError}>Error A</Text>}>
            <View style={styles.miniComponent}>
              <Text>Widget A</Text>
            </View>
          </ErrorBoundary>

          <ErrorBoundary fallback={<Text style={styles.miniError}>Error B</Text>}>
            <View style={styles.miniComponent}>
              <Text>Widget B</Text>
            </View>
          </ErrorBoundary>

          <ErrorBoundary fallback={<Text style={styles.miniError}>Error C</Text>}>
            <View style={styles.miniComponent}>
              <Text>Widget C</Text>
            </View>
          </ErrorBoundary>
        </View>
      </View>

      {/* PATTERN 3: Explanation of what Error Boundaries DON'T catch */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>3. Limitations</Text>
        <Text style={styles.warningText}>
          Error Boundaries do NOT catch:{'\n'}
          {'\n'}• Event handlers (use try/catch)
          {'\n'}• Async code (setTimeout, promises)
          {'\n'}• Server-side rendering
          {'\n'}• Errors in the boundary itself
        </Text>

        <View style={styles.codeBlock}>
          <Text style={styles.codeTitle}>For event handlers, use try/catch:</Text>
          <Text style={styles.code}>
            {`const handleClick = () => {
  try {
    riskyOperation();
  } catch (error) {
    setError(error);
  }
};`}
          </Text>
        </View>
      </View>

      {/* Best Practices */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>4. Best Practices</Text>
        <Text style={styles.bestPractice}>
          1. Place boundaries strategically at route/feature level
        </Text>
        <Text style={styles.bestPractice}>
          2. Log errors to a service (Sentry, Crashlytics)
        </Text>
        <Text style={styles.bestPractice}>
          3. Provide helpful fallback UI with recovery options
        </Text>
        <Text style={styles.bestPractice}>
          4. Use multiple boundaries to isolate failures
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  section: {
    backgroundColor: '#fff',
    margin: 16,
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  sectionDesc: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  safeComponent: {
    backgroundColor: '#d4edda',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  safeText: {
    color: '#155724',
    textAlign: 'center',
  },
  inlineFallback: {
    backgroundColor: '#f8d7da',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    alignItems: 'center',
  },
  inlineErrorText: {
    color: '#721c24',
    marginBottom: 8,
  },
  button: {
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  miniComponent: {
    backgroundColor: '#e3f2fd',
    padding: 12,
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 4,
    alignItems: 'center',
  },
  miniError: {
    backgroundColor: '#ffcdd2',
    padding: 12,
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 4,
    textAlign: 'center',
    color: '#c62828',
  },
  warningText: {
    fontSize: 14,
    color: '#856404',
    backgroundColor: '#fff3cd',
    padding: 12,
    borderRadius: 8,
    lineHeight: 22,
  },
  codeBlock: {
    backgroundColor: '#2d2d2d',
    padding: 12,
    borderRadius: 8,
    marginTop: 12,
  },
  codeTitle: {
    color: '#9cdcfe',
    fontSize: 12,
    marginBottom: 8,
  },
  code: {
    color: '#d4d4d4',
    fontFamily: 'monospace',
    fontSize: 12,
    lineHeight: 18,
  },
  bestPractice: {
    fontSize: 14,
    color: '#333',
    marginBottom: 8,
    paddingLeft: 8,
  },
});
