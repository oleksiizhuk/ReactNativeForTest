import React, { memo, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { RNCamera, FaceDetector } from 'react-native-camera';


export const Camera = memo(() => {

  const [camera, setCamera] = useState<any>(null)


  const takePicture = async () => {
    if (camera) {
      const options = { quality: 0.5, base64: true };
      const data = await camera.takePictureAsync(options);
      console.log('Picture taken:', data.uri);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <RNCamera
        ref={(ref: any) => setCamera(ref)}
        style={{ width: 300, height: 400 }}
      />
      <TouchableOpacity onPress={takePicture}>
        <Text style={{ fontSize: 20, marginTop: 20 }}>Take Picture</Text>
      </TouchableOpacity>
    </View>
  )
})
