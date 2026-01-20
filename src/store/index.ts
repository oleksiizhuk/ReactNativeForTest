import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  Storage,
} from 'redux-persist';
import { storageMMKV } from '@services/storageService';
import theme from './reducers/theme';
import { auth } from './reducers/auth';
import todo from './reducers/todo';
import board from './reducers/board';

const reducers = combineReducers({
  theme,
  auth,
  todo,
  board,
});

// MMKV storage adapter for redux-persist
export const reduxStorage: Storage = {
  setItem: (key, value) => {
    storageMMKV.set(key, value);
    return Promise.resolve(true);
  },
  getItem: key => {
    const value = storageMMKV.getString(key);
    return Promise.resolve(value ?? null);
  },
  removeItem: key => {
    storageMMKV.remove(key);
    return Promise.resolve();
  },
};

const persistConfig = {
  key: 'root',
  storage: reduxStorage,
  whitelist: ['theme', 'auth', 'todo', 'board'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store, persistor };
