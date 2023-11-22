import React from 'react';
import { StartupTemplate } from '../../components/Template';
import { useStartupScreen } from './hooks';

export const StartupScreen = () => {
  useStartupScreen();
  return <StartupTemplate />;
};
