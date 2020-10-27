import styled from 'styled-components';
import { COLORS } from '../../../config/colorsPalette';

export const Background = styled.div`
  background-image: url('/hero.png');
  background-size: cover;
  background-position: bottom;
  height: 400px;
  padding: 0 5%;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: left;
  padding-top: 30px;
`;

export const Title = styled.h1`
  font-family: sans-serif;
  font-weight: 900;
  font-size: 60px;
  width: 50%;
  margin: 5px 0;
`;

export const SubTitle = styled.h5`
  font-size: 25px;
  font-weight: 200;
  margin: 5px 0;
`;

export const StyledButton = styled.div`
  margin: 20px 0;
  > button.MuiButton-containedPrimary {
    background-color: ${COLORS.utilities.primary};
    border-radius: 25px;
    text-transform: none;
    font-weight: 700;
  }
`;
