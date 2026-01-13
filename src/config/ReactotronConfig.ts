import Reactotron from 'reactotron-react-native';
import { NativeModules } from 'react-native';

// Get the host for Android emulator or iOS simulator
const getHost = () => {
  // For Android emulator, use 10.0.2.2
  // For iOS simulator and physical devices, use localhost
  const scriptURL = NativeModules.SourceCode?.scriptURL;
  const address = scriptURL?.split('://')[1]?.split('/')[0]?.split(':')[0];
  return address ?? 'localhost';
};

const reactotron = Reactotron.configure({
  name: 'MyApp',
  host: getHost(),
})
  .useReactNative({
    asyncStorage: false, // Enable if using @react-native-async-storage/async-storage
    networking: {
      // Intercept and display network requests
      ignoreUrls: /symbolicate|logs/, // Ignore these URLs
    },
    editor: false, // Enable if you want to jump to your editor from the overlay
    overlay: false, // Overlay on the app to click and jump to editor
  })
  .connect();

// Extend console for easier logging
declare global {
  interface Console {
    tron: typeof reactotron;
  }
}

console.tron = reactotron;

export default reactotron;