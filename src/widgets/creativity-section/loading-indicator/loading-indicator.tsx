'use client';

import { useEffect, useRef, useState } from 'react';

import HourglassIcon from '@/shared/assets/hourglassIcon';
import Loader from '@/shared/assets/loader';
import { useTranslations } from '@/shared/lib';

import styles from './loading-indicator.module.scss';

export const LoadingIndicator = () => {
  const [time, setTime] = useState(0);
  const t = useTranslations('CreativityScreen.loadingIndicator');
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setTime(prev => {
        const next = +(prev + 0.01).toFixed(2);
        if (next >= 5) {
          if (intervalRef.current !== null) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }

          return 5;
        }

        return next;
      });
    }, 10);

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Loader className={styles.loader} />
        <span className={styles.time}>{time}</span>
        <div className={styles.indicator}>
          <div className={styles.triangleClip} />
          <p>
            {t('messagePrefix')}
            <span> {t('durationPrefix')}</span> <HourglassIcon />
            30 {t('secondsShort')}
          </p>
        </div>
      </div>
    </div>
  );
};
