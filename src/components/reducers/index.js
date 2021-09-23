import { createReducer } from '@reduxjs/toolkit';
import { listOfWorkers } from '../../listOfWorkers';
import { newOrder } from '../actions/index';

export const stepReducer = createReducer(listOfWorkers, (builder) => {
  builder.addCase(newOrder.type, (state, action) => {
    state[Math.floor(Math.random() * state.length)].orders.push(action.payload);
  });
});
