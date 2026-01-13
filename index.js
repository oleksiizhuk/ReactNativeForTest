/**
 * @format
 */

// Initialize Reactotron in development mode (must be first!)
if (__DEV__) {
  require('./src/config/ReactotronConfig');
}

import { AppRegistry } from 'react-native';
// import App from './App';
import { App } from './src/App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
