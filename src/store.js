import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import { hashHistory } from 'react-router';
import { createLogger } from 'redux-logger';
import note from './reducers/index';

const loggerMiddleware = createLogger();
const store = createStore(
  note,
  applyMiddleware(
    loggerMiddleware,
    thunkMiddleware,
  ));

export const history = syncHistoryWithStore(hashHistory, store);

export default store;
