import { FETCH_BOOKS_FAILURE, FETCH_BOOKS_REQUEST, FETCH_BOOKS_SUCCESS } from './bookTypes';

// const bookReducer = (state = [], action) => {
//   switch (action.type) {
//     case CREATE_BOOK:
//       return [
//         ...state,
//         {
//           id: state.length > 0 ? state[state.length - 1].id + 1 : 1,
//           title: action.payload.title,
//           category: action.payload.category,
//         },
//       ];
//     case REMOVE_BOOK:
//       return state.filter(book => book.id !== action.payload.id);

//     default:
//       return state;
//   }
// };

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_BOOKS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_BOOKS_SUCCESS:
      return {
        loading: false,
        books: action.payload,
        error: '',
      };
    case FETCH_BOOKS_FAILURE:
      return {
        loading: false,
        books: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default bookReducer;
