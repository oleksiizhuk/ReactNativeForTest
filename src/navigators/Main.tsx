import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ExampleScreen } from "../screens";

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={ExampleScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
