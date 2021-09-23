import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Home } from './components/home';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { stepReducer } from './components/reducers';
import './components/services/ordersGenerator';
export const store = createStore(stepReducer);

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('root')
);
