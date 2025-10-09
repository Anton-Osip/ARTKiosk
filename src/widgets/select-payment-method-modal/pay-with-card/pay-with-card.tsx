'use client';

import { useEffect } from 'react';

import { ArrowPay } from '@/shared/assets';
import { useTranslations } from '@/shared/lib';

import styles from './pay-with-card.module.scss';

interface Props {
  amount?: string;
  showErrorModal: () => void;
}

export const PayWithCard = ({ amount = '3,00', showErrorModal }: Props) => {
  const t = useTranslations('PaymentModal.payWithCard');

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
        <span className={styles.label}>{t('amountLabel')}</span>
        <span className={styles.amount}>
          <span className={styles.symbol}>{t('currencySymbol')}</span>
          {amount}
        </span>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>{t('instruction')}</p>
        <ArrowPay />
      </div>
    </div>
  );
};
