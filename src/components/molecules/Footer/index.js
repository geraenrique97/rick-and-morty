import { StyledFooter, List, AvailableIcon } from './styles';
import { FacebookIcon } from '../../../../public/facebook.svg';
import { InstagramIcon } from '../../../../public/instagram.svg';
import { LinkedinIcon } from '../../../../public/linkedin.svg';
import { useCharacters, useEpisodes, useLocations } from '../../../store/selectors';
import { useStore } from '../../../store';

export const Footer = () => {
  const {total: characters} = useCharacters();
  const {total: episodes} = useEpisodes();
  const {total: locations} = useLocations();
  const {statusServer} = useStore();

  return (
    <StyledFooter>
      <List>
        <li><span>LOCATIONS: {locations}</span></li>
        <li><span>CHARACTERS: {characters}</span></li>
        <li><span>EPISODES: {episodes}</span></li>
      </List>
      <div className="status">
        <span>SERVER STATUS</span>
        {statusServer? <AvailableIcon /> : null}
      </div>
      <List className="social-networks">
        <li><a><FacebookIcon /></a></li>
        <li><a><InstagramIcon /></a></li>
        <li><a><LinkedinIcon /></a></li>
      </List>
    </StyledFooter>
  );
};
