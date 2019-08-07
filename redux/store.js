import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import rootReducer from './reducer';

import homeSaga from 'pages/home/saga';

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const logger = createLogger();

  const store = createStore(
    rootReducer,
    {},
    bindMiddleware([logger, sagaMiddleware]),
  );

  store.sagaTask = sagaMiddleware.run(homeSaga);

  return store;
}

export default configureStore;
