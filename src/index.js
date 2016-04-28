import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './components/Greeting';
import KitchenSink from './containers/KitchenSink';
import SideWeight from './containers/SideWeight';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from './reducers/index';

const rootReducer = combineReducers(reducers);
const store = createStore(rootReducer, {});



ReactDOM.render(
  <Provider store={ store}>
  <SideWeight/>
  </Provider>, document.getElementById('root')
);
