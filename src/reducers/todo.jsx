import { TODO_ACTION } from '../actions/index';

const initialState = [];


/**
 * todoApp reducer function for todo app
 *  action present: INSERT and DELETE
 * @param  {array} [state=[]]  default state empty array
 * @param  {object} action              action object with keys type of action and payload
 * @return {array}                      return new state
 */
const todoApp = (state = initialState, action) => {
  switch (action.type) {
    // adding to TODOLIST
    case TODO_ACTION.INSERT:
      return [...state, action.payload];
    // removing from TODOLIST
    case TODO_ACTION.DELETE:
      return state.filter(elem => elem !== action.payload);
    default:
      return state;
  }
};

export default todoApp;
