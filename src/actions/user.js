import { browserHistory } from 'react-router';

import * as types from './actionTypes';
import { logoutUser, removeToken } from './auth';
import { createErrorMessage, createSuccessMessage } from './flashMessages';
import User from '../services/User';

export function createUser(user) {
  return async dispatch => {
    dispatch(createUserRequest());

    try {
      await User.create(user);
      dispatch(createUserSuccess());
      browserHistory.push('/users');
      dispatch(createSuccessMessage(['User successfully created!']));
    } catch (error) {
      if (!error.messages) {
        error.messages = ["Oops! We weren't able to add that user."];
      }
      dispatch(createUserFailure());
      dispatch(createErrorMessage(error.messages));
    }
  };
}

export function createUserRequest() {
  return { type: types.CREATE_USER__REQUEST };
};

export function createUserSuccess() {
  return { type: types.CREATE_USER__SUCCESS };
};

export function createUserFailure() {
  return { type: types.CREATE_USER__FAILURE };
};

export function fetchCurrentUser() {
  return async dispatch => {
    dispatch(currentUserRequest());

    try {
      const response = await User.getCurrent();
      dispatch(currentUserSuccess(response.user));
    } catch (error) {
      dispatch(currentUserFailure());
      removeToken();
      dispatch(createErrorMessage(error.messages));
    }
  };
};

export function currentUserRequest() {
  return { type: types.CURRENT_USER__REQUEST };
};

export function currentUserSuccess(user) {
  return { type: types.CURRENT_USER__SUCCESS, user };
};

export function currentUserFailure() {
  return { type: types.CURRENT_USER__FAILURE };
};

export function fetchCurrentUserFromToken(token) {
  return async dispatch => {
    dispatch(currentUserRequest());

    try {
      const response = await User.getCurrent(token);
      dispatch(currentUserSuccess(response.user));
    } catch (error) {
      if (!error.messages) {
        error.messages = ["Invalid token. Your password can’t be updated. Please try again"];
      }
      dispatch(currentUserFailure());
      browserHistory.push('/login');
      dispatch(createErrorMessage(error.messages));
    }
  };
};

export function fetchUser(cognizantId) {
  return async dispatch => {
    dispatch(getUserRequest());
    try {
      const response = await User.get(cognizantId);
      dispatch(getUserSuccess(response.user));
    } catch (error) {
      dispatch(getUserFailure());
      dispatch(createErrorMessage(error.messages));
      browserHistory.replace('/404');
    }
  };
};

export function getUserRequest() {
  return { type: types.FETCH_USER__REQUEST };
};

export function getUserSuccess(user) {
  return { type: types.FETCH_USER__SUCCESS, user };
};

export function getUserFailure() {
  return { type: types.FETCH_USER__FAILURE };
};

export function fetchUsers() {
  return async dispatch => {
    dispatch(getUsersRequest());
    try {
      const response = await User.getAll();
      dispatch(getUsersSuccess(response.users));
    } catch (error) {
      dispatch(getUsersFailure());
      dispatch(createErrorMessage(error.messages));
    }
  };
};

export function getUsersRequest() {
  return { type: types.FETCH_USERS__REQUEST };
};

export function getUsersSuccess(users) {
  return { type: types.FETCH_USERS__SUCCESS, users };
};

export function getUsersFailure() {
  return { type: types.FETCH_USERS__FAILURE };
};

export function userPasswordUpdate(cognizantId, userSettings, token) {
  return async dispatch => {
    dispatch(userPasswordUpdateRequest(true));

    try {
      await User.updateSettings(cognizantId, userSettings, token);
      dispatch(userPasswordUpdateSuccess());
      dispatch(logoutUser());
      dispatch(createSuccessMessage(['Your password has been successfully updated!']));
      browserHistory.push('/login');
    } catch (error) {
      if (!error.messages) {
        error.messages = ['Your password could not be updated. Please try again.'];
      }
      dispatch(userPasswordUpdateFailure());
      dispatch(createErrorMessage(error.messages));
    }
  };
}

export function userPasswordUpdateRequest() {
  return { type: types.USER_PASSWORD_UPDATE__REQUEST };
};

export function userPasswordUpdateSuccess() {
  return { type: types.USER_PASSWORD_UPDATE__SUCCESS };
};

export function userPasswordUpdateFailure() {
  return { type: types.USER_PASSWORD_UPDATE__FAILURE };
};

export function userSettingsUpdate(cognizantId, userSettings) {
  return async dispatch => {
    dispatch(userSettingsUpdateRequest());

    try {
      const response = await User.updateSettings(cognizantId, userSettings);
      dispatch(userSettingsUpdateSuccess(response.user));
      const { firstName, lastName } = response.user;
      const successMessage = `${firstName} ${lastName} was successfully updated!`;
      dispatch(createSuccessMessage([successMessage]));
    } catch (error) {
      dispatch(userSettingsUpdateFailure());
      dispatch(createErrorMessage(error.messages));
    }
  };
};

export function userSettingsUpdateRequest(user) {
  return { type: types.USER_SETTINGS_UPDATE__REQUEST };
};

export function userSettingsUpdateSuccess(user) {
  return { type: types.USER_SETTINGS_UPDATE__SUCCESS, user };
};

export function userSettingsUpdateFailure(user) {
  return { type: types.USER_SETTINGS_UPDATE__FAILURE };
};
