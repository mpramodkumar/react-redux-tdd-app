import React from 'react';
import { Route } from 'react-router';

import App from './containers/App';

import NewUserPage from './containers/NewUserPage';
import Measure from './containers/Measure';

/* eslint-disable react/jsx-max-props-per-line */
export default (
  <Route component={Measure} path='/'>
    <Route component={App} path='/' />
  </Route>
);
/* eslint-enable react/jsx-max-props-per-line */
