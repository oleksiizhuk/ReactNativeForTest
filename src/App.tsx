import React, { ErrorInfo } from 'react';
import 'react-native-gesture-handler';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { store, persistor } from './store';
import { ApplicationNavigator } from './navigators/Application';
import { ErrorBoundary } from './components/Molecules';
import './translations';

/**
 * Global error handler - this is where you'd send errors to Sentry
 * Example with Sentry:
 *   import * as Sentry from '@sentry/react-native';
 *   Sentry.captureException(error);
 */
const handleGlobalError = (error: Error, errorInfo: ErrorInfo) => {
  // Log to your error tracking service (Sentry, Crashlytics, etc.)
  console.error('Global Error:', error.message);
  console.error('Component Stack:', errorInfo.componentStack);

  // Example: Sentry.captureException(error, { extra: { componentStack: errorInfo.componentStack } });
};

export const App = () => {
  return (
    <ErrorBoundary onError={handleGlobalError}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ApplicationNavigator />
        </PersistGate>
      </Provider>
    </ErrorBoundary>
  );
};
