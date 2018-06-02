/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from '../pages/MainPage';
import { Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory();

const routes = (
  <Router history={history}>
    <Route exact path="/" component={MainPage} />
  </Router>
);

export default routes;
