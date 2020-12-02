import { CHANGE_FILTER } from './filterTypes';

const initialState = 'All';

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.payload;

    default:
      return state;
  }
};

export default filterReducer;
