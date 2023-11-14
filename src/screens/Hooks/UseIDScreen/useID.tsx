import React, { memo, useId } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const UseIDScreen = memo(() => {
  const id1 = useId();
  const id2 = useId();
  return (
    <View style={styles.container}>
      <Text>{`id1= ${id1}`}</Text>
      <Text>{`id2= ${id2}`}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
  },
});
