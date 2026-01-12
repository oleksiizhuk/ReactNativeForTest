import React from 'react';
import { FadeInView } from './components/FadeInView';
import { ScrollView, Text } from 'react-native';
import { useStyles } from './AnimatedAPIScreen.styles';

export const AnimatedAPIScreen = () => {
  const styles = useStyles();
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
