import axios from 'axios';
import getConfig from 'next/config';

const { serverRuntimeConfig: { BACKEND_ENDPOINT } } = getConfig();

export function getSampleUsers() {
  return axios.get(`${BACKEND_ENDPOINT}/api/users?per_page=10`)
    .then(res => Promise.resolve(res))
    .catch(err => Promise.reject(err));
}

export function getSampleUserById(userId) {
  return axios.get(`${BACKEND_ENDPOINT}/api/users/${userId}`)
    .then(res => Promise.resolve(res))
    .catch(err => Promise.reject(err));
}
