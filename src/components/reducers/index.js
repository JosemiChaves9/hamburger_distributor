import { createReducer } from '@reduxjs/toolkit';
import { listOfWorkers } from '../../listOfWorkers';

export const stepReducer = createReducer(listOfWorkers, (builder) => {
  builder.addCase('@test/test', (state, action) => {
    return state;
  });
});
