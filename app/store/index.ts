import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

export default (rootReducer, rootSaga) => {
  const middleware = [];
  const enhancers = [];

  // Connect the sagas to the redux store
  const sagaMiddleware = createSagaMiddleware();
  middleware.push(sagaMiddleware);

  enhancers.push(applyMiddleware(...middleware));

  // creating store
  const store = createStore(rootReducer, compose(...enhancers));

  // Kick off the root saga
  sagaMiddleware.run(rootSaga);

  return store;
};
