'use client';

import { useEffect } from 'react';

import { ArrowPay } from '@/shared/assets';

import styles from './pay-with-card.module.scss';

interface Props {
  amount?: string;
  showErrorModal: () => void;
}

export const PayWithCard = ({ amount = '3,00', showErrorModal }: Props) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      showErrorModal();
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [showErrorModal]);

  return (
    <div className={styles.container}>
      <div className={styles.headerRow}>
        <span className={styles.label}>К оплате:</span>
        <span className={styles.amount}>
          <span className={styles.symbol}>$</span>
          {amount}
        </span>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>Для оплаты воcпользуйтесь терминалом</p>
        <ArrowPay />
      </div>
    </div>
  );
};
