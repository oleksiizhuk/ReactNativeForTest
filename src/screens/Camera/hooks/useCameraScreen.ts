import { useState } from 'react';

export const useCameraScreen = () => {
  const [camera, setCamera] = useState<any>(null);
  const takePicture = async () => {
    if (camera) {
      const options = { quality: 0.5, base64: true };
      const data = await camera.takePictureAsync(options);
      console.log('Picture taken:', data.uri);
    }
  };

  return {
    setCamera,
    takePicture,
  };
};
