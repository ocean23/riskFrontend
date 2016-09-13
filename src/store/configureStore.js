import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import logger from './logger';
import DevTools from '../containers/DevTools';
import rootReducer from '../reducers';
import huntingSagas from '../sagas/HuntingSagas';


export default function configureStore(initialState) {
  let createStoreWithMiddleware;
  const sagaMiddleware = createSagaMiddleware();

  if (__DEV__) {
    createStoreWithMiddleware = compose(
      applyMiddleware(
      	sagaMiddleware,
        thunk,
        logger
      ),
      DevTools.instrument()
    )(createStore);
  } else {
    createStoreWithMiddleware = compose(
      applyMiddleware(
      	sagaMiddleware,
        thunk
      )
    )(createStore);
  }

  const store = createStoreWithMiddleware(rootReducer, initialState);
  sagaMiddleware.run(huntingSagas);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
