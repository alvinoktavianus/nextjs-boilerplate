import axios from 'axios';
import getConfig from 'next/config';

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

const BACKEND_ENDPOINT = serverRuntimeConfig.BACKEND_ENDPOINT
  ? serverRuntimeConfig.BACKEND_ENDPOINT
  : publicRuntimeConfig.BACKEND_ENDPOINT;

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
