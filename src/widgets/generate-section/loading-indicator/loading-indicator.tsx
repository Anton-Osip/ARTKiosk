'use client';

import { clsx } from 'clsx';

import { HourglassIcon, Loader } from '@/shared/assets';
import { useTranslations } from '@/shared/lib';

import styles from './loading-indicator.module.scss';

interface Props {
  time: number;
  regenerateMode: boolean;
}

export const LoadingIndicator = ({ time, regenerateMode }: Props) => {
  const t = useTranslations('CreativityScreen.loadingIndicator');

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.loaderWrapper}>
          <Loader className={styles.loader} />
          <span className={styles.time}>{time}</span>

          <div
            className={clsx(
              styles.indicator,
              regenerateMode && styles.regenerateIndicator
            )}
          >
            <div className={styles.triangleClip} />
            {regenerateMode ? (
              <p>
                <span> Время генерации порядка</span> <HourglassIcon />
                30 {t('secondsShort')}
              </p>
            ) : (
              <p>
                {t('messagePrefix')}
                <span> {t('durationPrefix')}</span> <HourglassIcon />
                30 {t('secondsShort')}
              </p>
            )}
          </div>
        </div>
        {regenerateMode && (
          <div className={styles.info}>
            <p className={styles.infoTitle}>Доступна навигация</p>
            <p className={styles.description}>
              Во время генерации Вы можете зайти в AiClub или вернуться в
              Каталог для выбора новой идеи
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
