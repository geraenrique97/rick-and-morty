import styled from 'styled-components';
import { COLORS } from '../../../config/colorsPalette';

export const StyledContainer = styled.form`
  background-color: ${COLORS.neutral.dark};
  border-radius: 30px;

  color: ${COLORS.neutral.light};
  display: flex;
  height: 50px;
  margin-top: -20px;
  margin-bottom: 20px;
  padding: 0 20px;
  width: 70%;

  >.select-input {
    color: ${COLORS.neutral.light};
    border-right-color: #575656;
    border-right-style: solid;
    border-right-width: 1px;
    width: 17%;

    &:after {
      background-color: white;
      border-bottom: none;
      transform: none;
      transition: none;
      width: 5px;
    }
    .MuiSelect-icon {
      color: ${COLORS.neutral.light};
    }
  }

  >.text-input {
    color: ${COLORS.neutral.light};
    padding-left: 20px;
    width: 80%;

  }
`;