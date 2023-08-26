import React from 'react';
import { StartupTemplate } from "../../components/teamplate";
import { useStartupScreen } from "./hooks";

export const StartupScreen = () => {
  useStartupScreen()
  return (
    <StartupTemplate />
  );
};
