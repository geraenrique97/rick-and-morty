import styled from 'styled-components';
import { COLORS } from '../../../config/colorsPalette';

export const StyledFooter = styled.footer`
  background-color: ${COLORS.neutral.fullDark};
  /* bottom: 0; */
  /* position: fixed; */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  color: rgb(158, 158, 158);
  padding: 20px 0px;
  .status {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin: 10px; */
  padding: 0px;
  width: 100%;
  list-style-type: none;
  li {
    margin: 0 10px;
  }
`;

export const AvailableIcon = styled.div`
  background-color: green;
  height: 15px;
  width: 15px;
  border-radius: 8px;
  margin-left: 5px;
`;
