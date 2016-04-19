import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './components/Greeting';
import KitchenSink from './containers/KitchenSink';
import App from './containers/App';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from './reducers/index';

const rootReducer = combineReducers(reducers);
const store = createStore(rootReducer, {});



ReactDOM.render(
  <Provider store={ store}>
  <App/>
  </Provider>, document.getElementById('root')
);
