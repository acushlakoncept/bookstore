import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

// export const initialState = {
//   loading: false,
//   books: [],
//   categories: [],
//   filter: 'All',
//   error: '',
// };

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
