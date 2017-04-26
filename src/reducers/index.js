import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';


import locations from './locations';

import users from './users';

const root = combineReducers({

  locations,
  routing,
  users
});

export default root;
