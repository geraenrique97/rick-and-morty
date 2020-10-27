import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { useCharacters } from '../../../store/selectors';
import { Paginator } from '../../molecules/paginator';
import { useStore } from '../../../store';
import { useEffect } from 'react';
import { Container } from './style';
import { PAGINATOR_ACTIONS } from '../../../store/actions';

const ContentGrid = () => {
  const characters = useCharacters();
  const {dispatchPaginator} = useStore();

  useEffect(() => {
    dispatchPaginator({
      type: PAGINATOR_ACTIONS.SET_PAGES_NUMBER,
      payload: characters.pagesNumber,
    });
  }, [characters.pagesNumber]);

  return (
    <>
      <Container>
        {characters.currentPageData.map((data) => (
          <Card key={data.id}>
            <CardActionArea>
              <CardMedia
                image={data.image}
                title="Contemplative Reptile"
              />
              <CardContent>
                <span>{data.name}</span><br/>
                <span>{`${data.status} - ${data.species}`}</span><br/>
                <b><span>Last known location:</span></b><br/>
                <span>{data.location.name}</span><br/>
                
                <b><span>First seen in:</span></b><br/>

                <span>{data.episode}</span><br/>

              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Container>
      { !!characters.currentPageData.length && <Paginator /> }
    </>
  )
};

ContentGrid.propTypes = {
  searchResults: PropTypes.array,
}

export { ContentGrid }