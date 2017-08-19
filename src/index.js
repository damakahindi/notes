import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router, IndexRoute } from 'react-router';
import store, { history } from './store';
import App from './components/App';
import Admin from './components/Admin';
import Notes from './components/Notes.jsx';

const route = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Notes} />
        <Route path="/admin" component={Admin} />
      </Route>
    </Router>
  </Provider>
);

render(route, document.getElementById('root'));
