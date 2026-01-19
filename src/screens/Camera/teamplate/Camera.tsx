import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { memo } from 'react';

export const CameraTemplate = memo(({ takePicture }: any) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={takePicture}>
        <Text style={styles.text}>Take Picture</Text>
      </TouchableOpacity>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginTop: 20,
  },
});
