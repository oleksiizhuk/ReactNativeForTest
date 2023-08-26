import { Text, TouchableOpacity, View } from "react-native";
import { RNCamera } from "react-native-camera";
import React, { memo } from "react";

export const CameraTemplate = memo(({ setCamera, takePicture }: any) => {

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
