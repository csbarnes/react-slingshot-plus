//This file merely configures the store for hot reloading.
//This boilerplate file is likely to be the same for each project that uses Redux.
//With Redux, the actual stores are in /reducers.

import { createStore, compose } from 'redux';
import rootReducer from '../root.reducer';
import DevTools from '../devTools/DevTools.container.js';

const finalCreateStore = compose(
  // Make sure to add any Middleware
  // you want to use above DevTools.instrument()
  // Required! Enable Redux DevTools with the monitors you chose
  DevTools.instrument()
)(createStore);

export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../root.reducer', () => {
      const nextReducer = require('../root.reducer');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
