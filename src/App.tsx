import React, { ErrorInfo } from 'react';
import 'react-native-gesture-handler';
import * as Sentry from '@sentry/react-native';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { store, persistor } from './store';
import { ApplicationNavigator } from './navigators/Application';
import { ErrorBoundary } from '@components/Molecules';
import './translations';

Sentry.init({
  dsn: 'https://1fbdda9faa291659f91370a7a9c7ce8e@o4510743126671360.ingest.de.sentry.io/4510743130079312',
  sendDefaultPii: true,
  enableLogs: true,
  debug: __DEV__, // Enable debug mode in development to see Sentry logs
});

const handleGlobalError = (error: Error, errorInfo: ErrorInfo) => {
  console.error('Global Error:', error.message);
  console.error('Component Stack:', errorInfo.componentStack);
  Sentry.captureException(error, { extra: { componentStack: errorInfo.componentStack } });
};

const AppComponent = () => {
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

export const App = Sentry.wrap(AppComponent);
