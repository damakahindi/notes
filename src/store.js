import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { hashHistory } from 'react-router';
import { createLogger } from 'redux-logger';
import note from './reducers/index';

const loggerMiddleware = createLogger();
const store = createStore(
  note,
  applyMiddleware(
    loggerMiddleware,
  ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const history = syncHistoryWithStore(hashHistory, store);

export default store;
