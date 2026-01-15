import { createMMKV } from 'react-native-mmkv';
import { IStorage } from './types.ts';

export const storage = createMMKV();

export class StorageService implements IStorage {
  set(data: any, key: string) {
    storage.set(key, data);
  }
  get(key: string) {
    return storage.getString(key) ?? null;
  }
  delete(key: string): void {
    storage.remove(key);
  }
  clearAll() {
    storage.clearAll();
  }
  contains(key: string) {
    return storage.contains(key);
  }
  getAllKeys(): string[] {
    return storage.getAllKeys();
  }
}

export const storageService = new StorageService();
