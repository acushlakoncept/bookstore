import { FETCH_BOOKS_FAILURE, FETCH_BOOKS_REQUEST, FETCH_BOOKS_SUCCESS } from './bookTypes';

const initialState = {
  loading: false,
  books: [],
  error: '',
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        loading: false,
        books: action.payload,
        error: '',
      };
    case FETCH_BOOKS_FAILURE:
      return {
        ...state,
        loading: false,
        books: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default bookReducer;
