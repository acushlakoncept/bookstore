import {
  FETCH_CATEGORY,
  FETCH_CATEGORY_SUCCESS,
  FETCH_CATEGORY_FAILURE,
} from './categoryTypes';

const initialState = {
  loading: false,
  categories: [],
  error: '',
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORY:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: action.payload,
        error: '',
      };
    case FETCH_CATEGORY_FAILURE:
      return {
        ...state,
        loading: false,
        categories: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default categoryReducer;
