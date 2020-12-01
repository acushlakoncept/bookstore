import * as actions from './bookTypes';

export const addBook = (title, category) => ({
  type: actions.CREATE_BOOK,
  payload: {
    title,
    category,
  },
});

export const removeBook = id => ({
  type: actions.REMOVE_BOOK,
  payload: {
    id,
  },
});

export const fetchBooksRequest = () => {
  return {
    type: actions.FETCH_BOOKS
  };
};

export const fetchBooksSuccess = (books) => {
  return {
    type: actions.FETCH_BOOKS_SUCCESS,
    payload: books
  };
};

export const fetchBooksFailure = (error) => {
  return {
    type: actions.FETCH_BOOKS_FAILURE,
    payload: error
  };
};

export const changeFilter = category => ({
  type: actions.CHANGE_FILTER,
  payload: {
    category,
  },
});
