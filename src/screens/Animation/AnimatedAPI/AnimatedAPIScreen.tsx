import React from 'react';
import { FadeInView } from './Components/FadeInView';
import { ScrollView, StyleSheet, Text } from 'react-native';

export const AnimatedAPIScreen = () => {
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
