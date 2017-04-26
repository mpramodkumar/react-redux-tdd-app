import fetch from 'isomorphic-fetch';
import { HEARTBEAT_API_URL } from '../config/apiConfig';
import { checkStatus } from '../utils/requests';

class User {
  _getToken() {
    return sessionStorage.getItem('jwt');
  }

  async create(user) {
    const token = this._getToken();
    const userCreateUrl = `${HEARTBEAT_API_URL}/users`;

    const response = await fetch(userCreateUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      },
      body: JSON.stringify({ user })
    });

    return await checkStatus(response);
  }

  async forgotPassword(email) {
    const forgotPasswordUrl = `${HEARTBEAT_API_URL}/forgot_password`;

    const response = await fetch(forgotPasswordUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email })
    });

    return await checkStatus(response);
  }

  async get(cognizantId) {
    const token = this._getToken();
    const userInfoUrl = `${HEARTBEAT_API_URL}/users/${cognizantId}`;

    const response = await fetch(userInfoUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      }
    });

    return await checkStatus(response);
  }

  async getAll() {
    const token = this._getToken();
    const usersUrl = `${HEARTBEAT_API_URL}/users`;

    const response = await fetch(usersUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      }
    });

    return await checkStatus(response);
  }

  async getCurrent(token=this._getToken()) {
    const userUrl = `${HEARTBEAT_API_URL}/me`;

    const response = await fetch(userUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      }
    });

    return await checkStatus(response);
  }

  async login(creds) {
    const loginUrl =`${HEARTBEAT_API_URL}/login`;

    const response = await fetch(loginUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: creds.email,
        password: creds.password
      })
    });

    return await checkStatus(response);
  }

  async updateSettings(cognizantId, user, token=this._getToken()) {
    const userSettingsUpdateUrl = `${HEARTBEAT_API_URL}/users/${cognizantId}`;

    const response = await fetch(userSettingsUpdateUrl, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      },
      body: JSON.stringify({ user })
    });

    return await checkStatus(response);
  }
};

export default new User();
