'use client';
import { ChangeEvent, useEffect } from 'react';

import { Apply, HourglassIcon } from '@/shared/assets';
import { useGenerateStore, useModalStore } from '@/shared/lib';
import { Button, useVirtualKeyboard, VirtualKeyboard } from '@/shared/ui';

import styles from './pay-with-code.module.scss';

export const PayWithCode = () => {
  const {
    makeAPayment,
    codeEntryTimeLimit,
    clearCodeEntryCountdown,
    startCodeEntryCountdown,
  } = useGenerateStore();
  const { closeModal } = useModalStore();
  const {
    value,
    setValue,
    isKeyboardOpen,
    openKeyboard,
    closeKeyboard,
    handleKeyPress,
  } = useVirtualKeyboard();

  // Запускаем таймер при монтировании компонента
  useEffect(() => {
    startCodeEntryCountdown();

    // Очищаем таймер при размонтировании
    return () => {
      clearCodeEntryCountdown();
    };
  }, [startCodeEntryCountdown, clearCodeEntryCountdown]);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  const applyHandler = () => {
    makeAPayment('cash');
    clearCodeEntryCountdown();
    closeModal();
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.title}>
          Оплати у продавца, получи код и приступай к творчеству
        </p>
        <div className={styles.time}>
          <HourglassIcon />
          <span>{codeEntryTimeLimit}</span> сек
        </div>
      </div>
      <input
        className={styles.input}
        placeholder={'Enter code'}
        onChange={onChangeHandler}
        onFocus={openKeyboard}
        value={value}
        readOnly
      />
      <Button className={styles.applyBtn} onClick={applyHandler}>
        <Apply />
      </Button>

      <VirtualKeyboard
        isOpen={isKeyboardOpen}
        onClose={closeKeyboard}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
};
