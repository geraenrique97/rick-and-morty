import { getEndpoints } from '../config/environment';
import { httpClient } from '../utils/httpClient';

const BASE_ENDPOINT = getEndpoints('CHARACTERS');

const getCharacterByName = (name) => httpClient.get(`${BASE_ENDPOINT}?name=${name}`);

const getCharactersByPage = async (page=1) => {
  const {data: {results}} = await httpClient.get(`${BASE_ENDPOINT}/?page=${page}`);
  return results;
};

const getAllCharacters = async () => {
  let fulfilledResponse = [];
  try {
    const { data: { info, results } } = await httpClient.get(BASE_ENDPOINT);
    fulfilledResponse = [...fulfilledResponse, ...results];
    const pageCount = info.pages;
    for (let i = 2; i <= pageCount; i++) {
      const { data: { results } } = await httpClient.get(`${BASE_ENDPOINT}/?page=${i}`);
      fulfilledResponse = [...fulfilledResponse, ...results];
    }
  } catch (e) {
    console.log(e);
  }
  return fulfilledResponse;
}

export { getCharacterByName, getCharactersByPage, getAllCharacters }