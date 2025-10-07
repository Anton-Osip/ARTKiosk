'use client';

import { useCallback, useState } from 'react';

import { WarningTriangle } from '@/shared/assets';
import { useModalStore } from '@/shared/lib';
import { Modal } from '@/shared/ui';

import { PayWithCard } from './pay-with-card';
import { PayWithCode } from './pay-with-code';
import { PaymentMethods } from './payment-methods';
import { PaymentSummaryCard } from './payment-summary-card';
import styles from './select-payment-method-modal.module.scss';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  setIsPaidOff: () => void;
}

export const SelectPaymentMethodModal = ({
  isOpen,
  onClose,
  setIsPaidOff,
}: Props) => {
  const [showPayWithCash, setShowPayWithCash] = useState(false);
  const [showPayWithCard, setShowPayWithCard] = useState(false);
  const { openModal } = useModalStore();

  const showPayWithCashHandler = () => {
    setShowPayWithCash(true);
  };
  const setShowPayWithCardHandler = () => {
    setShowPayWithCard(true);
  };

  const showErrorModal = useCallback(() => {
    openModal({
      type: 'info-confirm',
      title: 'Упс...',
      description:
        'Оплата не прошла, повторите оплату, или обратитесь к продавцу',
      icon: <WarningTriangle />,
      confirmButtonText: '',
      onConfirm: () => {},
      buttonVariant: 'primary',
      onClose: () => {},
      withoutButton: true,
    });
  }, [openModal]);

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

      {showPayWithCash && !showPayWithCard && (
        <PayWithCode setIsPaidOff={setIsPaidOff} />
      )}
      {!showPayWithCash && !showPayWithCard && (
        <PaymentMethods
          showPayWithCashHandler={showPayWithCashHandler}
          setShowPayWithCardHandler={setShowPayWithCardHandler}
          showErrorModal={showErrorModal}
        />
      )}
    </Modal>
  );
};
