import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import HomeSagas from '@Sagas/homeSagas';

import rootReducer from '@Reducers';

function configureStore(initialState) {
  const middlewares = [];

  // Add redux-saga middleware
  const sagaMiddleware = createSagaMiddleware();
  middlewares.push(sagaMiddleware);

  // Add redux-logger in development
  if (process.env.NODE_ENV === 'development') {
    const logger = createLogger();
    middlewares.push(logger);
  }

  const store = createStore(
    combineReducers({ ...rootReducer }),
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares)),
  );

  // Run all saga middleware here
  store.sagaTask = sagaMiddleware.run(HomeSagas);

  return store;
}

export default configureStore;
