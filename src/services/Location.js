import fetch from 'isomorphic-fetch';
import { HEARTBEAT_API_URL } from '../config/apiConfig';
import { checkStatus } from '../utils/requests';

class Location {
  _getToken() {
    return sessionStorage.getItem('jwt');
  }

  async getAll() {
    const token = this._getToken();
    const locationsUrl = `${HEARTBEAT_API_URL}/locations`;

    const response = await fetch(locationsUrl, {
      method: 'GET',
      headers: {
        Authorization: token,
        'Content-Type': 'application/json'
      }
    });

    return await checkStatus(response);
  }
}

export default new Location();
