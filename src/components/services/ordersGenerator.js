import ShortUniqueId from 'short-unique-id';
import { newOrder } from '../actions/index';
import { store } from '../../index';
const id = new ShortUniqueId({ length: 5 });

export const generateNewOrder = () => {
  return {
    ...newOrder,
    payload: {
      id: id().toUpperCase(),
      step: 0,
    },
  };
};

setInterval(() => {
  store.dispatch(generateNewOrder());
}, 6000);
