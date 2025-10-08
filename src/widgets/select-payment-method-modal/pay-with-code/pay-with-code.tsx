'use client';
import { ChangeEvent, useState } from 'react';

import { Apply, HourglassIcon } from '@/shared/assets';
import { useGenerateStore, useModalStore } from '@/shared/lib';
import { Button } from '@/shared/ui';

import styles from './pay-with-code.module.scss';

export const PayWithCode = () => {
  const [value, setValue] = useState('');
  const { makeAPayment } = useGenerateStore();
  const { closeModal } = useModalStore();
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  const applyHandler = () => {
    makeAPayment('cash');
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
          <span>48</span> сек
        </div>
      </div>
      <input
        className={styles.input}
        placeholder={'Enter code'}
        onChange={onChangeHandler}
        value={value}
      />
      <Button className={styles.applyBtn} onClick={applyHandler}>
        <Apply />
      </Button>
    </div>
  );
};
