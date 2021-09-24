import { createReducer, current } from '@reduxjs/toolkit';
import { listOfWorkers } from '../listOfWorkers';
import {
  finishBurger,
  newOrder,
  nextStep,
  startStopTimer,
} from '../actions/index';

export const burgerReducer = createReducer(listOfWorkers.workers, (builder) => {
  builder.addCase(newOrder.type, (state, action) => {
    state[findWorkerWithLessCharge(state)].orders = [
      ...state[findWorkerWithLessCharge(state)].orders,
      action.payload,
    ];
    return state;
  });

  builder.addCase(nextStep.type, (state, action) => {
    const order = state[action.payload.idx].orders.find(
      (id) => action.payload.id
    );

    order.step++;
    return state;
  });

  builder.addCase(finishBurger.type, (state, action) => {
    const worker = state[action.payload.idx];
    const order = worker.orders.find((id) => action.payload.id);
    const indexOfOrder = worker.orders.indexOf(order);
    worker.orders.splice(indexOfOrder, 1);
    return state;
  });
});

export const timerReducer = createReducer(false, (builder) => {
  builder.addCase(startStopTimer.type, (state) => {
    state = !state;
    return state;
  });
});

const findWorkerWithLessCharge = (listOfWorkers) => {
  let workerWithlessCharge = {
    idx: 0,
    charge: 10,
  };
  listOfWorkers.forEach((worker, idx) => {
    if (worker.orders.length <= workerWithlessCharge.charge) {
      workerWithlessCharge.idx = idx;
      workerWithlessCharge.charge = worker.orders.length;
    }
  });

  return workerWithlessCharge.idx;
};
