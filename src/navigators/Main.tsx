import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  ExampleScreen,
  RegistrationScreen,
  StartupScreen,
  CameraScreen,
  AnimationTopicScreen,
  AnimatedAPIScreen,
  LayoutAnimationScreen,
  ReanimatedScreen,
  ReactAnimationVsReanimated,
  GestureHandlerExample,
  CarouselScreen,
  CarouselWithLibrary,
  CarouselFlatListScreen,
  CarouselReanimatedScreen,
  ClassLifeCycleScreen,
} from '@/screens';
import { TopicScreen } from '@screens/Topic/TopicScreen.tsx';
import { HookTopicScreen } from '@screens/Hooks/HookTopicScreen';
import { UseDeferredValueScreen } from '@screens/Hooks/UseDeferredValueScreen/UseDeferredValue.tsx';
import { UseTransitionScreen } from '@screens/Hooks/UseTransitionScreen/useTransition.tsx';
import { UseIDScreen } from '@screens/Hooks/UseIDScreen/useID.tsx';
import { LazyScreen } from '@screens/Hooks/LazyScreen';
import { JSTopicScreen } from '@screens/JS/JSTopicScreen/JSTopicScreen.tsx';
import { JSAsynkScreen } from '@screens/JS/JSAsynkScreen/JSAsynkScreen.tsx';
import { JSHTMLTreeScreen } from '@screens/JS/JSHTMLTreeScreen/JSHTMLTreeScreen.tsx';
import { TodoScreen } from '@screens/Todo/TodoScreen.tsx';
import { BoardScreen } from '@screens/Board';
import { ErrorBoundaryScreen } from '@screens/React/ErrorBoundaryScreen';

const Stack = createStackNavigator();

export const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Startup" component={StartupScreen} />
      <Stack.Screen name="Main" component={MainNavigator} />
      <Stack.Screen name="Camera" component={CameraScreen} />
      <Stack.Screen name="Topic" component={TopicScreen} />
      <Stack.Screen
        name="AnimationTopicScreen"
        component={AnimationTopicScreen}
      />
      <Stack.Screen name="AnimatedAPIScreen" component={AnimatedAPIScreen} />
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
  );
};
