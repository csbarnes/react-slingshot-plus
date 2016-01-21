import { createStore } from 'redux';
import rootReducer from '../root.reducer';

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState);
}
