import styled from 'styled-components';
import { COLORS } from '../../../config/colorsPalette';

export const StyledConainerPagination = styled.div`
  align-items: center;
  background-color: ${COLORS.neutral.dark};
  border-radius: 20px;
  display: flex;
  margin: 20px 0;
  padding: 5px 20px;

  .MuiPaginationItem-root {
    color: white;
  }
`;

export const PageSize = styled.div`
  span, .MuiInputBase-root {
    font-size: 14px;
    font-weight: 300;
  }

  .MuiInputBase-root {
    color: ${COLORS.neutral.light};
    margin: 0 5px;

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
`;
