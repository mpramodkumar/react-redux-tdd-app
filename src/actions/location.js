import * as types from './actionTypes';
import { createErrorMessage } from './flashMessages';
import Location from '../services/Location';

export function fetchLocations() {
  return async dispatch => {
    dispatch(fetchLocationsRequest());
    try {
      const response = await Location.getAll();
      dispatch(fetchLocationsSuccess(response.locations));
    } catch (error) {
      if (!error.messages) {
        error.messages = ["Oops! We're unable to fetch locations at this time."];
      }
      dispatch(fetchLocationsFailure());
      dispatch(createErrorMessage(error.messages));
    }
  };
}

export function fetchLocationsRequest() {
  return { type: types.FETCH_LOCATIONS__REQUEST };
};

export function fetchLocationsSuccess(locations) {
  return { type: types.FETCH_LOCATIONS__SUCCESS, locations };
};

export function fetchLocationsFailure() {
  return { type: types.FETCH_LOCATIONS__FAILURE };
};
