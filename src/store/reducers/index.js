import { BASE_ACTIONS, CHARACTERS_ACTIONS, PAGINATOR_ACTIONS } from '../actions';

export const basicReducer = (state, action) => {
  switch (action.type) {
    case BASE_ACTIONS.SET:
      return { ...state, total: action.payload.total, all: [...action.payload.all] };
    case BASE_ACTIONS.CLEAR:
      return {};
    default:
      return state;
  }
};

export const charactersReducer = (state, action) => {
  switch (action.type) {
    case CHARACTERS_ACTIONS.ADD:
      return { ...state, all: [...state.all, ...action.payload.results] };
    default:
      return basicReducer(state, action);
  }
};

export const paginatorReducer = (state, action) => {
  switch (action.type) {
    case PAGINATOR_ACTIONS.SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };
    case PAGINATOR_ACTIONS.SET_PAGES_NUMBER:
      return { ...state, pagesNumber: action.payload };
    case PAGINATOR_ACTIONS.SET_PAGE_SIZE:
      return { ...state, pageSize: action.payload };
    default:
      return state
  }
};
