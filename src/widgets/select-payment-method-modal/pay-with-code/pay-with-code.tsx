'use client';
import { ChangeEvent, useCallback, useState } from 'react';

import { Apply, HourglassIcon } from '@/shared/assets';
import { useGenerateStore, useModalStore } from '@/shared/lib';
import { Button, VirtualKeyboard } from '@/shared/ui';

import styles from './pay-with-code.module.scss';

export const PayWithCode = () => {
  const [value, setValue] = useState('');
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const { makeAPayment } = useGenerateStore();
  const { closeModal } = useModalStore();
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  const applyHandler = () => {
    makeAPayment('cash');
    closeModal();
  };

  const openKeyboard = () => setIsKeyboardOpen(true);
  const closeKeyboard = () => setIsKeyboardOpen(false);

  const handleKeyPress = useCallback((key: string) => {
    if (key === 'backspace') {
      setValue(prev => prev.slice(0, -1));

      return;
    }
    if (key === 'space') {
      setValue(prev => `${prev} `);

      return;
    }
    if (key === 'clear') {
      setValue('');

      return;
    }
    if (key === 'done') {
      closeKeyboard();

      return;
    }
    setValue(prev => `${prev}${key}`);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.title}>
          Оплати у продавца, получи код и приступай к творчеству
        </p>
        <div className={styles.time}>
          <HourglassIcon />
          <span>48</span> сек
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
