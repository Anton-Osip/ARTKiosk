'use client';

import { clsx } from 'clsx';
import { memo } from 'react';

import { RefreshArrow } from '@/shared/assets';
import { useTranslations } from '@/shared/lib';

import styles from './generation-modes.module.scss';

interface Props {
  withoutTitle?: boolean;
  isPaid: boolean;
  generationCounter: number;
}

export const GenerationModes = memo(
  ({ withoutTitle = false, isPaid, generationCounter }: Props) => {
    const t = useTranslations('CreativityScreen.generationModes');
    if (isPaid) {
      return (
        <div className={styles.containerWithPaid}>
          <div className={clsx(styles.card, styles.createMore)}>
            <p className={styles.title}>{t('createMore.title')}</p>
            <p className={styles.subtitle}>{generationCounter} {t('createMore.designs')}</p>
          </div>
          <div className={clsx(styles.card, styles.generate)}>
            <p className={clsx(styles.title)}>{t('generate.title')}</p>
            <p className={styles.subtitle}>{t('generate.description')}</p>
          </div>
          <div className={clsx(styles.card, styles.regenerate)}>
            <p className={clsx(styles.title)}>
              <RefreshArrow />- {t('regenerate.title')}
            </p>
            <p className={styles.subtitle}>
              {t('regenerate.description')}
            </p>
            <div className={styles.info}>
              <p className={styles.text}>
                {t('regenerate.info')}
              </p>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div
          className={clsx(
            styles.container,
            withoutTitle && styles.containerSecondary
          )}
        >
          {!withoutTitle && <p className={styles.title}>{t('title')}</p>}
          <div className={styles.modes}>
            <div className={styles.mode}>
              <p
                className={clsx(
                  styles.modeTitle,
                  withoutTitle && styles.modeTitleSecondary
                )}
              >
                {t('generate.title')}
              </p>
              <p className={styles.modeDescription}>
                {t('generate.description')}
              </p>
            </div>
            <div className={styles.mode}>
              <p
                className={clsx(
                  styles.modeTitle,
                  withoutTitle && styles.modeTitleSecondary
                )}
              >
                <RefreshArrow />- {t('regenerate.title')}
              </p>
              <p className={styles.modeDescription}>
                {t('regenerate.description')}
              </p>
            </div>
          </div>
        </div>
      );
    }
  }
);

GenerationModes.displayName = 'GenerationModes';
