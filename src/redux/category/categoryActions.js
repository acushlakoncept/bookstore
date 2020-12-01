import axios from 'axios';
import {
  FETCH_CATEGORY,
  FETCH_CATEGORY_SUCCESS,
  FETCH_CATEGORY_FAILURE,
} from './categoryTypes';

export const fetchCategoryRequest = () => ({
  type: FETCH_CATEGORY,
});

export const fetchCategorySuccess = category => ({
  type: FETCH_CATEGORY_SUCCESS,
  payload: category,
});

export const fetchCategoryFailure = error => ({
  type: FETCH_CATEGORY_FAILURE,
  payload: error,
});

export const fetchCategories = () => function (dispatch) {
  dispatch(fetchCategoryRequest());
  axios
    .get('https://cush-bookstore-api.herokuapp.com/api/v1/category', { mode: 'cors' })
    .then(response => {
      const categories = response.data;
      dispatch(fetchCategorySuccess(categories));
    })
    .catch(error => {
      dispatch(fetchCategoryFailure(error.message));
    });
};
