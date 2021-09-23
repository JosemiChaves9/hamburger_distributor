import '../services/ordersGenerator';
import { burgerReducer, timerReducer } from '../reducers/index';
import { combineReducers, createStore } from 'redux';

export const store = createStore(
  combineReducers({
    burgers: burgerReducer,
    timer: timerReducer,
  })
);
