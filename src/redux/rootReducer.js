import { combineReducers } from 'redux';
import bookReducer from './books/bookReducer';
import filterReducer from './filter/filterReducer';
import categoryReducer from './category/categoryReducer';

const rootReducer = combineReducers({
  book: bookReducer,
  filter: filterReducer,
  category: categoryReducer,
});

export default rootReducer;
