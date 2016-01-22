import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import Root from './config/Root.container';
import configureStore from './config/store/configureStore';
import './styles/styles.scss'; //Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.

const store = configureStore();

render(
  <Provider store={store}>
    <Root />
  </Provider>, document.getElementById('app')
);

if (process.env.NODE_ENV !== 'production') {
  const showDevTools = require('./config/devTools/showDevTools.dev.js');
  showDevTools(store);
}
