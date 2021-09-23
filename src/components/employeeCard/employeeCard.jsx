import styles from './index.module.scss';
import { StepButtons } from '../stepButtons/stepButtons';
import React from 'react';

export const EmployeeCard = ({ name, orders }) => {
  return (
    <div className={styles.card}>
      <h3>{name}</h3>
      {orders.map((order) => (
        <div className={styles.hamburgerState} key={order.id}>
          <p>{order.id}</p>
          <StepButtons step={order.step} />
        </div>
      ))}
    </div>
  );
};
