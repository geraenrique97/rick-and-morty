import PropTypes from 'prop-types';
import { createContext, useContext, useReducer, useState, useEffect } from 'react';
import { basicReducer, paginatorReducer, charactersReducer } from './reducers';

const MainContext = createContext();

const INITIAL_STATE_EPISODES = { total: 0, all: [] };
const INITIAL_STATE_CHARACTERS = { total: 0, all: [] };
const INITIAL_STATE_LOCATIONS = { total: 0, all: [] };
const INITIAL_SEARCH_PARAMS = {
  entity: '',
  key: '',
};
const INITIAL_STATE_PAGINATOR = {
  currentPage: 1,
  pageSize: 8,
  pagesNumber: 0,
}

export const StoreProvider = ({ children }) => {
  const [episodes, dispatchEpisodes] = useReducer(basicReducer, INITIAL_STATE_EPISODES);
  const [characters, dispatchCharacters] = useReducer(charactersReducer, INITIAL_STATE_CHARACTERS);
  const [locations, dispatchLocations] = useReducer(basicReducer, INITIAL_STATE_LOCATIONS);
  const [statusServer, setStatusServer] = useState();
  const [searchParams, setSearchParams] = useState(INITIAL_SEARCH_PARAMS);
  const [paginator, dispatchPaginator] = useReducer(paginatorReducer, INITIAL_STATE_PAGINATOR);

  useEffect(() => {
    setStatusServer(true);
  }, [episodes, characters, locations]);

  const storeValue = {
    episodes,
    dispatchEpisodes,
    characters,
    dispatchCharacters,
    locations,
    dispatchLocations,
    setStatusServer: (value) => setStatusServer(value),
    statusServer,
    searchParams,
    setSearchParams: (params) => {
      setSearchParams((searchParams) => ({...searchParams, ...params}));
    },
    paginator,
    dispatchPaginator,
  };

  return (
    <MainContext.Provider value={storeValue}>
      {children}
    </MainContext.Provider>
  )
};

StoreProvider.propTypes = {
  children: PropTypes.node,
}

export const useStore = () => useContext(MainContext);