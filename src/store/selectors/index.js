import { useStore } from '..'
import { useEffect, useState } from 'react';

const useCharacters = () => {
  const [found, setFound] = useState([]);
  const { characters, episodes, searchParams, paginator } = useStore();
  const [paginated, setPaginated] = useState({});
  const [currentPageData, setCurrentPageData] = useState([]);

  useEffect(() => {
    if (searchParams.entity !== 'characters' || !searchParams.key) return
    const fulfillData = () => characters.all
      .filter((character) =>
        character.name.toLowerCase().includes(searchParams.key.toLowerCase()))
      .map((character) => ({
        ...character,
        //TODO: tomar el id y buscarlo con el mismo
        episode: episodes.all.find(({ url }) => {
          return character.episode[0] === url
        }).name ?? '',
      }))
    setFound(fulfillData);
  }, [searchParams]);

  useEffect(() => {
    if (!found.length) return;
    console.log(paginator);
    const splitData = found.length/paginator.pageSize;
    const pagesNumber = parseInt(splitData) + (splitData % 1? 1 : 0);
    const pages = Array.from({length: pagesNumber}).map((_, idx) => {
      const from = idx * paginator.pageSize;
      const to = from + paginator.pageSize;
      return found.slice(from, to);
    })
    setPaginated(pages);
  }, [found, paginator.pageSize]);

  useEffect(() => {
    if (!paginated.length) return;
    setCurrentPageData(paginated[paginator.currentPage-1]);
  }, [paginator.currentPage, paginated]);

  return {found, ...characters, currentPageData, pagesNumber: paginated.length};
};

const useEpisodes = () => {
  const { episodes } = useStore();
  return { ...episodes };
};

const useLocations = () => {
  const { locations } = useStore();
  return {...locations };
};

export { useCharacters, useEpisodes, useLocations };