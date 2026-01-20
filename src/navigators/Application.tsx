import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { ExampleScreen, RegistrationScreen } from '@/screens';

import { useTheme } from '@/hooks';
import { MainNavigator } from '@/navigators/Main.tsx';

const Stack = createStackNavigator<any>();

export const ApplicationNavigator = () => {
  const { Layout, darkMode, NavigationTheme } = useTheme();

  const navigationRef = useNavigationContainerRef();

  return (
    <SafeAreaView style={[Layout.fill]}>
      <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
        <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />

        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="Home"
            component={ExampleScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Registration"
            component={RegistrationScreen}
            options={{ headerShown: true }}
          />
          <Stack.Screen name="Main" component={MainNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};
