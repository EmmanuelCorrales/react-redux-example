'use strict'
import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { applyMiddleware, createStore }  from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import Dashboard from './components/dashboard';
import reducers from './reducers/index';

const middleware = applyMiddleware(thunk, logger);
const store = createStore(reducers, middleware);

render(
  <Provider store={store}>
    <Dashboard/>
  </Provider>,
  document.getElementById('app')
);
