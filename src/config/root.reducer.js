import { combineReducers } from 'redux';
import fuelSavingsAppState from '../fuelSavings/core/fuelSavings.reducer';
import todoAppState from '../todo/core/todo.reducer';

const rootReducer = combineReducers({
  fuelSavingsAppState,
  todoAppState
});

export default rootReducer;
