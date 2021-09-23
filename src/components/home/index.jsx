import styles from './index.module.scss';
import { EmployeeCard } from '../employeeCard/employeeCard';
import { useSelector } from 'react-redux';
export const Home = () => {
  const workers = useSelector((store) => store);

  return (
    <>
      <div className={`${styles.actionsContainer}`}>
        Next burger in: "counter"
        <button>Stop/Resume</button>
      </div>
      <div className={`${styles.ordersContainer}`}>
        {workers.map((worker) => (
          <EmployeeCard
            name={worker.name}
            orders={worker.orders}
            key={worker.name}
          />
        ))}
      </div>
    </>
  );
};
