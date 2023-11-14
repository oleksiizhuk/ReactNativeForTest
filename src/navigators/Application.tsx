import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { useFlipper } from '@react-navigation/devtools';
import { createStackNavigator } from '@react-navigation/stack';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { StartupScreen, CameraScreen } from '../screens';
import { TopicScreen } from '../screens/Topic/TopicScreen';
import { useTheme } from '../hooks';
import { MainNavigator } from './Main';
import { AnimationTopicScreen } from '../screens/Animation/AnimationTopicScreen/AnimationTopicScreen';
import { AnimatedAPIScreen } from '../screens/Animation/AnimatedAPI/AnimatedAPIScreen';
import { ApplicationStackParamList } from '../../@types/navigation';
import { ReanimatedScreen } from '../screens/Animation/ReanimatedScreen/ReanimatedScreen';
import { LayoutAnimationScreen } from '../screens/Animation/LayoutAnimationScreen/LayoutAnimationScreen';
import { UseDeferredValueScreen } from '../screens/Hooks/UseDeferredValueScreen/UseDeferredValue';
import { HookTopicScreen } from '../screens/Hooks/HookTopicScreen/HookTopicScreen';
import { UseTransitionScreen } from '../screens/Hooks/useTransition/useTransition';

const Stack = createStackNavigator<ApplicationStackParamList>();

export const ApplicationNavigator = () => {
  const { Layout, darkMode, NavigationTheme } = useTheme();
  const { colors } = NavigationTheme;

  const navigationRef = useNavigationContainerRef();

  useFlipper(navigationRef);

  return (
    <SafeAreaView style={[Layout.fill, { backgroundColor: colors.card }]}>
      <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
        <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
        <Stack.Navigator screenOptions={{ headerShown: true }}>
          <Stack.Screen name="Startup" component={StartupScreen} />
          <Stack.Screen name="Main" component={MainNavigator} />
          <Stack.Screen name="Camera" component={CameraScreen} />
          <Stack.Screen name="Topic" component={TopicScreen} />
          <Stack.Screen
            name="AnimationTopicScreen"
            component={AnimationTopicScreen}
          />
          <Stack.Screen
            name="AnimatedAPIScreen"
            component={AnimatedAPIScreen}
          />
          <Stack.Screen
            name="LayoutAnimationScreen"
            component={LayoutAnimationScreen}
          />
          <Stack.Screen name="ReanimatedScreen" component={ReanimatedScreen} />
          <Stack.Screen name="HookTopicScreen" component={HookTopicScreen} />
          <Stack.Screen
            name="UseDeferredValueScreen"
            component={UseDeferredValueScreen}
          />
          <Stack.Screen
            name="UseTransitionScreen"
            component={UseTransitionScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};
