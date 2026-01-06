// src/specs/NativeStorage.ts

import { TurboModule, TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  // String
  getString(key: string): string | null;
  setString(key: string, value: string): boolean;

  // Number
  getNumber(key: string): number | null;
  setNumber(key: string, value: number): boolean;

  // Boolean
  getBoolean(key: string): boolean | null;
  setBoolean(key: string, value: boolean): boolean;

  // Utils
  delete(key: string): boolean;
  clearAll(): boolean;
  contains(key: string): boolean;
  getAllKeys(): string[];
}

export default TurboModuleRegistry.getEnforcing<Spec>('Storage');
