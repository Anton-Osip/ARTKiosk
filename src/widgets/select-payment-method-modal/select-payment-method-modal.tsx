'use client';

import { useEffect, useState } from 'react';

import { useGenerateStore } from '@/shared/lib';
import { Modal } from '@/shared/ui';

import { PayWithCard } from './pay-with-card';
import { PayWithCode } from './pay-with-code';
import { PaymentMethods } from './payment-methods';
import { PaymentSummaryCard } from './payment-summary-card';
import styles from './select-payment-method-modal.module.scss';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  showErrorModal: () => void;
  isPayWithCard?: boolean;
  isAgain?: boolean;
}

export const SelectPaymentMethodModal = ({
  isOpen,
  onClose,
  showErrorModal,
  isPayWithCard = false,
  isAgain = true,
}: Props) => {
  const { generationCounter, clearCodeEntryCountdown } = useGenerateStore();
  const [showPayWithCash, setShowPayWithCash] = useState(false);
  const [showPayWithCard, setShowPayWithCard] = useState(isPayWithCard);

  const showPayWithCashHandler = () => {
    setShowPayWithCash(true);
  };
  const setShowPayWithCardHandler = () => {
    setShowPayWithCard(true);
  };

  useEffect(() => {
    if (generationCounter !== 0) {
      onClose();
    }
  });

  useEffect(() => {
    return () => {
      clearCodeEntryCountdown();
    };
  }, [clearCodeEntryCountdown]);
  console.log(isAgain);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      showCloseButton={true}
      className={styles.container}
    >
      <div className={styles.header}>
        <p className={styles.title}>
          {isAgain ? 'Продолжи творчество' : 'Вы подошли к этапу творчества'}
        </p>
        <p className={styles.subTitle}>
          Создание 20 уникальных дизайнов стоит всего $3
        </p>
      </div>
      {showPayWithCard && !showPayWithCash && (
        <PayWithCard showErrorModal={showErrorModal} />
      )}
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
