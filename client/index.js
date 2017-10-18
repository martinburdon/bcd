import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'

// Default data
// import collections from './data/collections.js';
// import minifigures from './data/minifigures.js';

const defaultState = {
  // collections,
  // minifigures
};

const store = createStore(rootReducer, defaultState)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
