import styles from './index.module.scss';
import React from 'react';
import { useDispatch } from 'react-redux';
import { finishBurger, nextStep } from '../../actions';

export const StepButtons = ({ step, id, idx }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <button className={styles.stepButton} disabled={step >= 1}>
        <img
          src='bread.svg'
          alt=''
          className={styles.stepButtonImg}
          onClick={() => {
            dispatch({
              ...nextStep,
              payload: {
                id: id,
                idx: idx,
              },
            });
          }}
        />
      </button>
      <button className={styles.stepButton} disabled={step >= 2}>
        <img
          src='cheese.svg'
          alt=''
          className={styles.stepButtonImg}
          onClick={() => {
            dispatch({
              ...nextStep,
              payload: {
                id: id,
                idx: idx,
              },
            });
          }}
        />
      </button>
      <button
        className={styles.stepButton}
        disabled={step >= 3}
        onClick={() => {
          dispatch({
            ...nextStep,
            payload: {
              id: id,
              idx: idx,
            },
          });
        }}>
        <img src='meat.svg' alt='' className={styles.stepButtonImg} />
      </button>
      <button className={styles.stepButton}>
        <img
          src='hamburguer.svg'
          alt=''
          className={styles.stepButtonImg}
          onClick={() => {
            dispatch({
              ...finishBurger,
              payload: {
                id: id,
                idx: idx,
              },
            });
          }}
        />
      </button>
    </div>
  );
};
