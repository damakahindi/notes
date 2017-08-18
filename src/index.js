import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router, IndexRoute } from 'react-router';
import store, { history } from './store';
import App from './components/App';
import Admin from './components/Admin';
import User from './components/User';

const route = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={User} />
        <Route path="/admin" component={Admin} />
      </Route>
    </Router>
  </Provider>
);

render(route, document.getElementById('root'));
