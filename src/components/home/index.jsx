import styles from './index.module.scss';
import { EmployeeCard } from '../employeeCard/employeeCard';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { orderGenerator } from '../../services/ordersGenerator';

export const Home = () => {
  const { workers, secondsBetweenOrders } = useSelector((store) => store);
  const [counter, setCounter] = useState(secondsBetweenOrders);
  const [intervalId, setIntervalId] = useState();
  const [generatingOrders, setGeneratingOrders] = useState(false);

  useEffect(() => {
    if (generatingOrders) {
      setIntervalId(orderGenerator.startGeneratingOrders(secondsBetweenOrders));
    } else {
      orderGenerator.stopGeneratingOrders(intervalId);
    }
  }, [generatingOrders, secondsBetweenOrders]);

  return (
    <>
      <div className={`${styles.actionsContainer}`}>
        Next burger in: {counter}
        <button
          className={
            generatingOrders ? `${styles.stopped}` : `${styles.activated}`
          }
          onClick={() => setGeneratingOrders(!generatingOrders)}>
          {generatingOrders ? 'Stop' : 'Resume'}
        </button>
      </div>
      <div className={`${styles.ordersContainer}`}>
        {workers.map((worker, idx) => (
          <EmployeeCard
            name={worker.name}
            orders={worker.orders}
            key={worker.name}
            idx={idx}
          />
        ))}
      </div>
    </>
  );
};
