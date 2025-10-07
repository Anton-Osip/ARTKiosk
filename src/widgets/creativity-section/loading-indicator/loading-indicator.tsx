'use client';

import { HourglassIcon, Loader } from '@/shared/assets';
import { useTranslations } from '@/shared/lib';

import styles from './loading-indicator.module.scss';

interface Props {
  time: number;
}

export const LoadingIndicator = ({ time }: Props) => {
  const t = useTranslations('CreativityScreen.loadingIndicator');

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
