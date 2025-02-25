import React, { memo } from 'react'
import { useCameraScreen } from './hooks/useCameraScreen'
import { CameraTemplate } from '../../components/Template/Camera'

export const CameraScreen = memo(() => {
  const { setCamera, takePicture } = useCameraScreen()
  return <CameraTemplate setCamera={setCamera} takePicture={takePicture} />
})
