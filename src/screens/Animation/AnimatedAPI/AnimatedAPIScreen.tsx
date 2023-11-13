import React, { useEffect, useRef } from 'react';
import { FadeInView } from './Components/FadeInView';
import { Animated, ScrollView, StyleSheet, Text } from 'react-native';

export const AnimatedAPIScreen = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1, // Animate to opacity: 1 (fully visible)
      duration: 2000, // 2000ms
      useNativeDriver: true, // Add this line
    }).start();
  }, [fadeAnim]);

  return (
    <ScrollView style={styles.container}>
      <FadeInView>
        <Text>FadeInView</Text>
        <Text>FadeInView</Text>
        <Text>FadeInView</Text>
        <Text>FadeInView</Text>
        <Text>FadeInView</Text>
        <Text>FadeInView</Text>
        <Text>FadeInView</Text>
        <Text>FadeInView</Text>
      </FadeInView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
  },
});
