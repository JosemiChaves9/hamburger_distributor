import ShortUniqueId from 'short-unique-id';
import { newOrder } from '../actions/index';
import { store } from '../store/index';

const id = new ShortUniqueId({ length: 5 });

export class orderGenerator {
  static generateNew() {
    return {
      ...newOrder,
      payload: {
        id: id().toUpperCase(),
        step: 0,
      },
    };
  }

  static startGeneratingOrders(secondsBetweenOrders) {
    return setInterval(() => {
      store.dispatch(this.generateNew());
    }, secondsBetweenOrders * 1000);
  }

  static stopGeneratingOrders(intervalId) {
    clearInterval(intervalId);
  }
}
