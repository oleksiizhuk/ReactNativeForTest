import {configureStore} from '@reduxjs/toolkit';
import {rootSaga} from './sagas/rootSaga';
import {combineReducers} from 'redux';
import {asyncReducers} from 'react-redux-help-kit';
import createSagaMiddleware from 'redux-saga';
import {reducers} from './reducers';
import {sagas} from './sagas/sagas';

const develop = true;

const sagaMiddleware = createSagaMiddleware();

const initReduxStore = () => {
  const rootReducer = combineReducers({
    ...asyncReducers,
    ...reducers,
  });

  const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => {
      const {logger} = require('redux-logger');
      return getDefaultMiddleware({
        serializableCheck: false,
      })
        .concat(sagaMiddleware)
        .concat(logger);
    },
    devTools: develop,
  });

  return {
    store,
  };
};

const {store} = initReduxStore();

export default store;

sagaMiddleware.run(rootSaga(sagas));
