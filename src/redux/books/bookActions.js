import axios from 'axios';
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

export const fetchBooksRequest = () => ({
  type: actions.FETCH_BOOKS,
});

export const fetchBooksSuccess = books => ({
  type: actions.FETCH_BOOKS_SUCCESS,
  payload: books,
});

export const fetchBooksFailure = error => ({
  type: actions.FETCH_BOOKS_FAILURE,
  payload: error,
});

export const changeFilter = category => ({
  type: actions.CHANGE_FILTER,
  payload: category,
});

export const fetchBooks = () => function (dispatch) {
  dispatch(fetchBooksRequest());
  axios
    .get('https://cush-bookstore-api.herokuapp.com/api/v1/books')
    .then(response => {
      const books = response.data;
      dispatch(fetchBooksSuccess(books));
    })
    .catch(error => {
      dispatch(fetchBooksFailure(error.message));
    });
};
