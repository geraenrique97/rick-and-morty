export const BASE_ACTIONS = {
  SET: 'set',
  CLEAR: 'clear',
};

export const CHARACTERS_ACTIONS = {
  ...BASE_ACTIONS,
  ADD: 'add',
};

export const PAGINATOR_ACTIONS = {
  SET_CURRENT_PAGE: 'set_current_page',
  SET_PAGE_SIZE: 'set_page_size',
  SET_PAGES_NUMBER: 'set_pages_number',
};
