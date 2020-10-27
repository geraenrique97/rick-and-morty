import Pagination from '@material-ui/lab/Pagination';
import { MenuItem, Select } from '@material-ui/core';
import { useStore } from '../../../store';
import { StyledConainerPagination, PageSize } from './style';
import { PAGINATOR_ACTIONS } from '../../../store/actions';

const sizesAllowed = [5, 6, 7, 8, 9, 10];

const Paginator = () => {
  const {paginator, dispatchPaginator} = useStore();

  const handleOnChangeSize = (e) => {
    dispatchPaginator({
      type: PAGINATOR_ACTIONS.SET_PAGE_SIZE,
      payload: e.target.value,
    })
  }
  const handleOnChangePage = (_, value) => {
    dispatchPaginator({
      type: PAGINATOR_ACTIONS.SET_CURRENT_PAGE,
      payload: value,
    })
  }
  return (
     <StyledConainerPagination>
      <Pagination
        count={paginator.pagesNumber}
        onChange={handleOnChangePage}
        shape="rounded"
      />
      <PageSize>
        <span>show</span>
        <Select defaultValue={paginator.pageSize} value={paginator.pageSize} onChange={handleOnChangeSize}>
        {sizesAllowed.map(
          (size) => (<MenuItem key={size} value={size}>{size}</MenuItem>)
        )}
        </Select>
        <span>items</span>
      </PageSize>
    </StyledConainerPagination>
  )
};

export {Paginator}