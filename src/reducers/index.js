import { createReducer } from '@reduxjs/toolkit';
import { listOfWorkers } from '../listOfWorkers';
import { newOrder, startStopTimer } from '../actions/index';

export const stepReducer = createReducer(listOfWorkers, (builder) => {
  builder.addCase(newOrder.type, (state, action) => {
    state[Math.floor(Math.random() * state.length)].orders.push(action.payload);
  });
});

export const timerReducer = createReducer(false, (builder) => {
  builder.addCase(startStopTimer.type, (state) => {
    state = !state;
  });
});
