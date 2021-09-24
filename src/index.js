import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Home } from './components/home';
import { Provider } from 'react-redux';
import { store } from './store/index';

window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('root')
);
