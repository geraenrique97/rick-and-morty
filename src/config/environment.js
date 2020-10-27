import getConfig from 'next/config';
const {publicRuntimeConfig: {API_URL}} = getConfig();

export const BASE_ENDPOINTS = new Map()
    .set('CHARACTERS', `${API_URL}/character`)
    .set('EPISODES', `${API_URL}/episode`)
    .set('LOCATIONS', `${API_URL}/location`)

export const getEndpoints = (endpoint) => BASE_ENDPOINTS.get(endpoint);
