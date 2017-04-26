import {
  FETCH_USERS__FAILURE,
  FETCH_USERS__REQUEST,
  FETCH_USERS__SUCCESS
} from '../actions/actionTypes';

const initialState = {
  list: [],
  requesting: false
};

export default function users(state=initialState, action) {
  switch (action.type) {
    case FETCH_USERS__FAILURE:
      return Object.assign({}, state, {
        requesting: false
      });
    case FETCH_USERS__REQUEST:
      return Object.assign({}, state, {
        requesting: true
      });
    case FETCH_USERS__SUCCESS:
      return Object.assign({}, state, {
        list: action.users,
        requesting: false
      });
    default:
      return state;
  }
};
