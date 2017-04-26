import { browserHistory } from 'react-router';

import * as types from './actionTypes';
import { createErrorMessage, createSuccessMessage } from './flashMessages';
import { currentUserSuccess } from './user';
import User from '../services/User';

//=========================Helpers==============================================

function setSessionItem(item, value) {
  sessionStorage.setItem(item, value);
}

function getSessionItem(item) {
  return sessionStorage.getItem(item);
}

function removeSessionItem(item) {
  return sessionStorage.removeItem(item);
}

//======================Login===================================================

export function loginUser(creds) {
  return async dispatch => {
    dispatch(authRequest());

    try {
      const response = await User.login(creds);
      const { user, jwt } = response;
      setSessionItem('jwt', jwt);
      dispatch(authSuccess());
      dispatch(currentUserSuccess(user));

      const requestedUrl = getSessionItem('requestedUrl');
      if (requestedUrl) {
        removeSessionItem('requestedUrl');
        return browserHistory.push(requestedUrl);
      };
      browserHistory.push(`/`);
    } catch (error) {
      dispatch(authFailure());
      dispatch(createErrorMessage(error.messages));
    }
  };
};

export function authRequest() {
  return { type: types.AUTH__REQUEST };
};

export function authSuccess() {
  return { type: types.AUTH__SUCCESS };
};

export function authFailure() {
  return { type: types.AUTH__FAILURE };
};

//=====================ForgotPassword===========================================

export function forgotPassword(email) {
  return async dispatch => {
    dispatch(authRequest());

    try {
      await User.forgotPassword(email);
      dispatch(authSuccess());
      dispatch(createSuccessMessage(['Thanks! Check your email to reset your password!']));
      browserHistory.push('/');
    } catch (error) {
      if (!error.messages) {
        error.messages = ["Oops, we weren’t able to submit your request"];
      }
      dispatch(authFailure());
      dispatch(createErrorMessage([error.messages]));
    }
  };
}

//=====================Logout===================================================

export function logoutUser() {
  return dispatch => {
    dispatch(logoutRequest());
    try {
      removeSessionItem('jwt');
      dispatch(logoutSuccess());
    } catch (error) {
      dispatch(logoutFailure());
    }
  };
};

export function logoutRequest() {
  return { type: types.LOGOUT__REQUEST };
};

export function logoutSuccess() {
  return { type: types.LOGOUT__SUCCESS };
};

export function logoutFailure() {
  return { type: types.LOGOUT__FAILURE };
};
