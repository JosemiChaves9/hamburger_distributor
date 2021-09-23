import '../services/ordersGenerator';
import { stepReducer, timerReducer } from '../reducers/index';
import { combineReducers, createStore } from 'redux';

export const store = createStore(
  combineReducers({
    burgers: stepReducer,
    timer: timerReducer,
  })
);
