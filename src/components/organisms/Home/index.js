import { Main } from './style';
import { Banner } from '../Banner';
import { SearchBox } from '../../molecules/SearchBox';
import { useEffect } from 'react';
import { ContentGrid } from '../ContentGrid';
import { useStore } from '../../../store';
import PropTypes from 'prop-types';

const Home = (props) => {
  const {episodes, characters, locations} = props;
  const {dispatchCharacters, dispatchEpisodes, dispatchLocations} = useStore();

  useEffect(() => {
    dispatchEpisodes({
      type: 'set',
      payload: {
        all: episodes,
        total: episodes.length,
      },
    });

    dispatchLocations({
      type: 'set',
      payload: {
        all: locations,
        total: locations.length,
      },
    });

    dispatchCharacters({
      type: 'set',
      payload: {
        all: characters,
        total: characters.length,
      },
    });
  }, []);

  return (
    <Main>
      <Banner />
      <SearchBox />
      <ContentGrid />
    </Main>
  );
};

Home.propTypes = {
  episodes: PropTypes.array,
  characters: PropTypes.array,
  locations: PropTypes.array,
}

export default Home;
