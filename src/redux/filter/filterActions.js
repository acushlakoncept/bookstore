import { CHANGE_FILTER } from './filterTypes';

// eslint-disable-next-line import/prefer-default-export
export const changeFilter = category => ({
  type: CHANGE_FILTER,
  payload: category,
});
