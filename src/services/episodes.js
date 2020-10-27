import { httpClient } from '../utils/httpClient';
import { getEndpoints } from '../config/environment';

const BASE_ENDPOINT = getEndpoints('EPISODES');

const getAllEpisodes = async () => {
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
};

export { getAllEpisodes };
