import { Button } from '@material-ui/core';
import { Background, Title, SubTitle, StyledButton } from './style';

export const Banner = () => {
  return (
    <Background>
      <Title>The Rick and Morty Challenge</Title>
      <SubTitle>Lorem Ipsum dolor sit amet</SubTitle>
      <StyledButton>
        <Button variant="contained" size="large" color="primary">Subscribe</Button>
      </StyledButton>
    </Background>
  )
};
