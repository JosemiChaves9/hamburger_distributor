import styles from './index.module.scss';
import { EmployeeCard } from '../employeeCard/employeeCard';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { orderGenerator } from '../../services/ordersGenerator';

export const Home = () => {
  const workers = useSelector((store) => store);
  const [timer, setTimer] = useState(false);
  const [intervalId, setIntervalId] = useState();
  const [generatingOrders, setGeneratingOrders] = useState(false);

  useEffect(() => {
    console.log(generatingOrders);
    if (generatingOrders) {
      setIntervalId(orderGenerator.startGeneratingOrders());
    } else {
      orderGenerator.stopGeneratingOrders(intervalId);
    }
  }, [generatingOrders]);

  return (
    <>
      <div className={`${styles.actionsContainer}`}>
        Next burger in: "counter"
        <button
          className={
            generatingOrders ? `${styles.stopped}` : `${styles.activated}`
          }
          onClick={() => setGeneratingOrders(!generatingOrders)}>
          {generatingOrders ? 'Stop' : 'Resume'}
        </button>
      </div>
      <div className={`${styles.ordersContainer}`}>
        {workers.burgers.map((worker, idx) => (
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
