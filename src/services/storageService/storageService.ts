import { createMMKV } from 'react-native-mmkv';
import { IStorage } from './types.ts';

const storageMMKV = createMMKV();

class StorageService implements IStorage {
  set(data: any, key: string) {
    storageMMKV.set(key, data);
  }
  get(key: string) {
    return storageMMKV.getString(key) ?? null;
  }
  delete(key: string): void {
    storageMMKV.remove(key);
  }
  clearAll() {
    storageMMKV.clearAll();
  }
  contains(key: string) {
    return storageMMKV.contains(key);
  }
  getAllKeys(): string[] {
    return storageMMKV.getAllKeys();
  }
}

const storageService = new StorageService();

export { storageMMKV, StorageService, storageService };
