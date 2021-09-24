import '../services/ordersGenerator';
import { burgerReducer } from '../reducers/index';
import { createStore } from 'redux';

export const store = createStore(
  burgerReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
