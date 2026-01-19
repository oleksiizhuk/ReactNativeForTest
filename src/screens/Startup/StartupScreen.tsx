import React from 'react'
import { StartupTemplate } from './template'
import { useStartupScreen } from './hooks'

export const StartupScreen = () => {
  useStartupScreen()
  return <StartupTemplate />
}
