import {
  FETCH_LOCATIONS__FAILURE,
  FETCH_LOCATIONS__REQUEST,
  FETCH_LOCATIONS__SUCCESS
} from '../actions/actionTypes';

const initialState = {
  list: [],
  requesting: false
};

export default function locations(state=initialState, action) {
  switch (action.type) {
    case FETCH_LOCATIONS__FAILURE:
      return Object.assign({}, state, {
        requesting: false
      });
    case FETCH_LOCATIONS__REQUEST:
      return Object.assign({}, state, {
        requesting: true
      });
    case FETCH_LOCATIONS__SUCCESS:
      return Object.assign({}, state, {
        list: action.locations,
        requesting: false
      });
    default:
      return state;
  }
}
