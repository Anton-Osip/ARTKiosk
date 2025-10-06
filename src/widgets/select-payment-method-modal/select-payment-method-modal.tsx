'use client';

import { useState } from 'react';

import { Modal } from '@/shared/ui';

import { PayWithCard } from './pay-with-card';
import { PayWithCode } from './pay-with-code';
import { PaymentMethods } from './payment-methods';
import { PaymentSummaryCard } from './payment-summary-card';
import styles from './select-payment-method-modal.module.scss';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const SelectPaymentMethodModal = ({ isOpen, onClose }: Props) => {
  const [showPayWithCash, setShowPayWithCash] = useState(false);
  const [showPayWithCard, setShowPayWithCard] = useState(false);

  const showPayWithCashHandler = () => {
    setShowPayWithCash(true);
  };
  const setShowPayWithCardHandler = () => {
    setShowPayWithCard(true);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      showCloseButton={true}
      className={styles.container}
    >
      <div className={styles.header}>
        <p className={styles.title}>Продолжи творчество</p>
        <p className={styles.subTitle}>
          Создание 20 уникальных дизайнов стоит всего $3
        </p>
      </div>
      {showPayWithCard && !showPayWithCash && <PayWithCard />}
      {!showPayWithCard && <PaymentSummaryCard />}

      {showPayWithCash && !showPayWithCard && <PayWithCode />}
      {!showPayWithCash && !showPayWithCard && (
        <PaymentMethods
          showPayWithCashHandler={showPayWithCashHandler}
          setShowPayWithCardHandler={setShowPayWithCardHandler}
        />
      )}
    </Modal>
  );
};
