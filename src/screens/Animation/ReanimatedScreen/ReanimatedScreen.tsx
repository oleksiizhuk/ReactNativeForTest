import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { DraggableBox } from './Component/DraggableBox';

export const ReanimatedScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text>DraggableBox</Text>
      <DraggableBox>
        <View style={styles.containerDraggableBox}>
          <Text style={styles.text}>DraggableBox</Text>
        </View>
      </DraggableBox>

      <DraggableBox>
        <View style={styles.containerDraggableBox}>
          <Text style={styles.text}>DraggableBox</Text>
        </View>
      </DraggableBox>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
  },
  containerDraggableBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 13,
    lineHeight: 20,
    fontWeight: '900',
    color: 'red',
  },
});