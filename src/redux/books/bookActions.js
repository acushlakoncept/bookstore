import axios from 'axios';
import * as actions from './bookTypes';

export const addBook = (title, author, category) => ({
  type: actions.CREATE_BOOK,
  payload: {
    title,
    author,
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
  type: actions.FETCH_BOOKS_REQUEST,
});

export const addBooksRequest = () => ({
  type: actions.ADD_BOOKS_REQUEST,
});

export const addBooksSuccess = () => ({
  type: actions.ADD_BOOKS_SUCCESS,
});

export const fetchBooksSuccess = books => ({
  type: actions.FETCH_BOOKS_SUCCESS,
  payload: books,
});

export const fetchBooksFailure = error => ({
  type: actions.FETCH_BOOKS_FAILURE,
  payload: error,
});

export const fetchBooks = () => function (dispatch) {
  dispatch(fetchBooksRequest());
  axios
    // .get('https://bookstore-api-ud.herokuapp.com/api/v1/books', {
    .get('http://localhost:3001/api/v1/books', {
      mode: 'cors',
    })
    .then(response => {
      const books = response.data;
      dispatch(fetchBooksSuccess(books));
    })
    .catch(error => {
      dispatch(fetchBooksFailure(error.message));
    });
};

export const addBooks = (title, author, category) => function (dispatch) {
  const bookInfo = {
    title,
    author,
    category_id: category,
  };

  dispatch(addBooksRequest());
  axios
    // .get('https://bookstore-api-ud.herokuapp.com/api/v1/books', {
    .post('http://localhost:3001/api/v1/books', bookInfo)
    .then(response => {
      // const book = response.data;
      if (response.status === 201) {
        dispatch(fetchBooks());
      }
      // dispatch(fetchBooksSuccess(book));
    })
    .catch(error => {
      dispatch(fetchBooksFailure(error.message));
    });
};

// axios.post('https://reqres.in/invalid-url', article)
//         .then(response => this.setState({ articleId: response.data.id }))
//         .catch(error => {
//             this.setState({ errorMessage: error.message });
//             console.error('There was an error!', error);
//         });
