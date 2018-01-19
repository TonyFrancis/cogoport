import { TODO_ACTION } from '../actions/index';

const initialState = [];

const todoApp = (state = initialState, action) => {
  switch (action.type) {
    case TODO_ACTION.INSERT:
      return [...state, action.payload];
    case TODO_ACTION.DELETE:
      return state.filter(elem => elem !== action.payload);
    default:
      return state;
  }
};

export default todoApp;
