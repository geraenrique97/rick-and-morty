import styled from 'styled-components';
import { COLORS } from '../../../config/colorsPalette';

export const Container = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: ${COLORS.neutral.dark};
  width: 100%;

  .MuiCard-root {
    border-radius: 10px;
    display: flex;
    flex: 1 0 23%;
    height: 250px;
    margin: 10px;
    max-width: 350px;

    .MuiCardActionArea-root {
      display: flex;
      justify-content: flex-start;

      .MuiCardMedia-root {
        flex: 0 0 40%;
        height: 100%;
      }
    }
  }
`;