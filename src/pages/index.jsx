import Home from '../components/organisms/Home';
import Head from 'next/head';
import { Footer } from '../components/molecules/Footer';
import { Header } from '../components/molecules/Header';
import { GlobalStyle } from '../config/globalStyle';
import { StoreProvider } from '../store';
import { getAllEpisodes } from '../services/episodes';
import { getAllLocations } from '../services/locations';
import { getAllCharacters } from '../services/characters';

export default function HomePage(props) {
  return (
    <>
      <Head>
        <title>Rick And Morty</title>
      </Head>
      <GlobalStyle />
      <StoreProvider>
        <Header />
        <Home {...props} />
        <Footer />
      </StoreProvider>
    </>
  );
}

export async function getStaticProps() {
  let responses;
  try {
    responses = await Promise.all([
      getAllEpisodes(),
      getAllLocations(),
      getAllCharacters(),
    ]);
  } catch (e) {
    console.log(e);
  }

  return {
    props: {
      episodes: responses[0],
      locations: responses[1],
      characters: responses[2],
    },
  };
}