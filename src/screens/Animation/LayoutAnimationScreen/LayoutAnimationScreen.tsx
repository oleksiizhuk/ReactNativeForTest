import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { ExpandingView } from './Component/ExpandingView';

export const LayoutAnimationScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <ExpandingView>
        <Text>ExpandingView</Text>
      </ExpandingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
  },
});
