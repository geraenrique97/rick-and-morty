import styled from 'styled-components';
import { COLORS } from '../../../config/colorsPalette';

export const StyledNavBar = styled.nav`
  background-color: ${COLORS.neutral.fullDark};
  height: 60px;
  padding: 10px 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
`;
