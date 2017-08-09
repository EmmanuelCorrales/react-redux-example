'use strict'
import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { applyMiddleware, createStore }  from 'redux';
import logger from 'redux-logger';
import Items from './components/items';
import NewItem from './components/newItem';
import reducers from './reducers/appReducers';

const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

render(
  <Provider store={store}>
    <Items />
  </Provider>,
  document.getElementById('app')
);
