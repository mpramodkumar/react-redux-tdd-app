import React from 'react';
import configureStore from './store/configureStore';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import { fetchCurrentUser } from './actions/user';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

if (sessionStorage.getItem('jwt')) {
  store.dispatch(fetchCurrentUser());
}

render(
  <Provider store={store}>
    <Router
      history={history}
      routes={routes}
    />
  </Provider>,
  document.getElementById('root')
);
