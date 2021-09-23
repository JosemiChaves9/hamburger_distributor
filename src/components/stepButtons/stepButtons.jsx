import styles from './index.module.scss';
import React from 'react';

export const StepButtons = ({ step }) => {
  return (
    <div>
      <button className={styles.stepButton} disabled={step >= 1}>
        <img src='bread.svg' alt='' className={styles.stepButtonImg} />
      </button>
      <button className={styles.stepButton} disabled={step >= 2}>
        <img src='cheese.svg' alt='' className={styles.stepButtonImg} />
      </button>
      <button className={styles.stepButton} disabled={step >= 3}>
        <img src='meat.svg' alt='' className={styles.stepButtonImg} />
      </button>
      <button className={styles.stepButton}>
        <img src='hamburguer.svg' alt='' className={styles.stepButtonImg} />
      </button>
    </div>
  );
};
