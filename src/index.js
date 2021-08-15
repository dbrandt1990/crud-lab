import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { manageRestaurants, manageReviews } from './reducers/manageRestaurant';

import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';

const store = createStore(() => {
  combineReducers({ manageRestaurants, manageReviews })
},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
