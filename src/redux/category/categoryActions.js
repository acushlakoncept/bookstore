import * as actions from './categoryTypes';

export const fetchCategoryRequest = () => {
  return {
    type: actions.FETCH_CATEGORY
  };
};

export const fetchCategorySuccess = (category) => {
  return {
    type: actions.FETCH_CATEGORY_SUCCESS,
    payload: category
  };
};

export const fetchCategoryFailure = (error) => {
  return {
    type: actions.FETCH_CATEGORY_FAILURE,
    payload: error
  };
};

export const changeFilter = category => ({
  type: actions.CHANGE_FILTER,
  payload: {
    category,
  },
});
