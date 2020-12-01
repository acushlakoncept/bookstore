import { combineReducers } from 'redux';
import bookReducer from './books/bookReducer';
import filterReducer from './filter/filterReducer';
import categoryReducer from './category/categoryReducer';

const rootReducer = combineReducers({
  books: bookReducer,
  filter: filterReducer,
  categories: categoryReducer,
});

export default rootReducer;
