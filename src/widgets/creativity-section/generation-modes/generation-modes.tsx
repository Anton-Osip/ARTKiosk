'use client';

import { clsx } from 'clsx';

import RefreshArrow from '@/shared/assets/refreshArrow';
import { useTranslations } from '@/shared/lib';

import styles from './generation-modes.module.scss';

interface Props {
  withoutTitle?: boolean;
}

export const GenerationModes = ({ withoutTitle = false }: Props) => {
  const t = useTranslations('CreativityScreen.generationModes');

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
          <p className={styles.modeDescription}>{t('generate.description')}</p>
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
};
