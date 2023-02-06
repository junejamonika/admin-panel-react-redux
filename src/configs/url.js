const DOMAIN = 'http://localhost:3080/';

const BASE = `${DOMAIN}api/v1/`;

// URLS
const URLS = {
  // USERS
  USERS: {
    GET_USERS : `${BASE}users`,
    DELETE_USER: `${BASE}users/`,
    GET_USER_DETAIL: `${BASE}users/`,
    UPDATE_USER: `${BASE}users/updateProfile/`
  }
}

export default URLS;