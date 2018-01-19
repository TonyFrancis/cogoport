import { combineReducers } from 'redux';
import todoApp from './todo';

const reducer = combineReducers({
  todoApp,
});

export default reducer;
