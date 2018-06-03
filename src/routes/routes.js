import React from 'react';
import createBrowserHistory from 'history/createBrowserHistory';
import { Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import MainPage from '../pages/MainPage';

const history = createBrowserHistory();

const routes = (
  <Provider store={store}>
    <Router history={history}>
      <Route exact path="/" component={MainPage} />
    </Router>
  </Provider>
);

export default routes;
