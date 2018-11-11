import React from 'react';
import createBrowserHistory from 'history/createBrowserHistory';
import { Router, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage';

const history = createBrowserHistory();

const routes = (
  <Router history={history}>
    <Route exact path="/" component={MainPage} />
  </Router>
);

export default routes;
