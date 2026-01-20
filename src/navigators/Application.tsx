import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { StartupScreen, CameraScreen } from '@/screens';
import { TopicScreen } from '../screens/Topic/TopicScreen';
import { useTheme } from '@/hooks';
import { MainNavigator } from './Main';
import { AnimationTopicScreen } from '@screens/Animation/AnimationTopicScreen/AnimationTopicScreen';
import { AnimatedAPIScreen } from '@screens/Animation/AnimatedAPI/AnimatedAPIScreen';
import { ReanimatedScreen } from '@screens/Animation/ReanimatedScreen/ReanimatedScreen';
import { LayoutAnimationScreen } from '@screens/Animation/LayoutAnimationScreen/LayoutAnimationScreen';
import { UseDeferredValueScreen } from '../screens/Hooks/UseDeferredValueScreen/UseDeferredValue';
import { HookTopicScreen } from '@screens/Hooks/HookTopicScreen';
import { UseTransitionScreen } from '../screens/Hooks/UseTransitionScreen/useTransition';
import { UseIDScreen } from '../screens/Hooks/UseIDScreen/useID';
import { LazyScreen } from '@screens/Hooks/LazyScreen';
import { JSTopicScreen } from '../screens/JS/JSTopicScreen/JSTopicScreen';
import { JSAsynkScreen } from '../screens/JS/JSAsynkScreen/JSAsynkScreen';
import { JSHTMLTreeScreen } from '../screens/JS/JSHTMLTreeScreen/JSHTMLTreeScreen';
import { TodoScreen } from '../screens/Todo/TodoScreen';
import { BoardScreen } from '@screens/Board/BoardScreen';
import { CarouselScreen } from '@screens/Animation/CarouselScreen/CarouselScreen';
import { CarouselFlatListScreen } from '@screens/Animation/CarouselFlatListScreen/CarouselFlatListScreen';
import { CarouselReanimatedScreen } from '@screens/Animation/CarouselReanimatedScreen/CarouselReanimatedScreen';
import { CarouselWithLibrary } from '@screens/Animation/CarouselRNRCScreen/CarouselRNRCScreen';
import { ReactAnimationVsReanimated } from '@screens/Animation/ReactAnimationVsReanimated';
import { GestureHandlerExample } from '@screens/Animation/GestureHandlerExample';
import { ClassLifeCycleScreen } from '@screens/ClassLifeCycle';
import { ErrorBoundaryScreen } from '@screens/React/ErrorBoundaryScreen';

const Stack = createStackNavigator<any>();

export const ApplicationNavigator = () => {
  const { Layout, darkMode, NavigationTheme } = useTheme();

  const navigationRef = useNavigationContainerRef();

  return (
    <SafeAreaView style={[Layout.fill]}>
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
          <Stack.Screen
            name="ReactAnimationVsReanimated"
            component={ReactAnimationVsReanimated}
          />
          <Stack.Screen
            name="GestureHandlerExample"
            component={GestureHandlerExample}
          />
          <Stack.Screen name="HookTopicScreen" component={HookTopicScreen} />
          <Stack.Screen
            name="UseDeferredValueScreen"
            component={UseDeferredValueScreen}
          />
          <Stack.Screen
            name="UseTransitionScreen"
            component={UseTransitionScreen}
          />
          <Stack.Screen name="UseIDScreen" component={UseIDScreen} />
          <Stack.Screen name="LazyScreen" component={LazyScreen} />
          <Stack.Screen name="JSTopicScreen" component={JSTopicScreen} />
          <Stack.Screen name="JSAsynkScreen" component={JSAsynkScreen} />
          <Stack.Screen name="JSHTMLTreeScreen" component={JSHTMLTreeScreen} />
          <Stack.Screen name="TodoScreen" component={TodoScreen} />
          <Stack.Screen name="BoardScreen" component={BoardScreen} />
          <Stack.Screen name="CarouselScreen" component={CarouselScreen} />
          <Stack.Screen
            name="CarouselWithLibrary"
            component={CarouselWithLibrary}
          />
          <Stack.Screen
            name="CarouselFlatListScreen"
            component={CarouselFlatListScreen}
          />
          <Stack.Screen
            name="CarouselReanimatedScreen"
            component={CarouselReanimatedScreen}
          />
          <Stack.Screen
            name="ClassLifeCycleScreen"
            component={ClassLifeCycleScreen}
          />
          <Stack.Screen
            name="ErrorBoundaryScreen"
            component={ErrorBoundaryScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};
