import { createReducer } from '@reduxjs/toolkit';
import { listOfWorkers } from '../listOfWorkers';
import {
  finishBurger,
  newOrder,
  nextStep,
  startStopTimer,
} from '../actions/index';

export const burgerReducer = createReducer(listOfWorkers.workers, (builder) => {
  builder.addCase(newOrder.type, (state, action) => {
    state[Math.floor(Math.random() * state.length)].orders.push(action.payload);
  });

  builder.addCase(nextStep.type, (state, action) => {
    const worker = state[action.payload.idx];
    const order = worker.orders.find((id) => action.payload.id);
    order.step++;
  });

  builder.addCase(finishBurger.type, (state, action) => {
    const worker = state[action.payload.idx];
    const order = worker.orders.find((id) => action.payload.id);
    const indexOfOrder = worker.orders.indexOf(order);
    worker.orders.splice(indexOfOrder, 1);
  });
});

export const timerReducer = createReducer(false, (builder) => {
  builder.addCase(startStopTimer.type, (state) => {
    state = !state;
  });
});
