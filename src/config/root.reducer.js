import { combineReducers } from 'redux';
import fuelSavingsAppState from '../fuelSavings/core/fuelSavings.reducer.js';

const rootReducer = combineReducers({
  fuelSavingsAppState
});

export default rootReducer;
