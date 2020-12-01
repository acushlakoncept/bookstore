import { createStore } from 'redux';
import rootReducer from './rootReducer';

export const initialState = {
  loading: false,
  books: [],
  categories: [],
  filter: 'All',
  error: ""
};

const store = createStore(rootReducer, initialState);

export default store;
