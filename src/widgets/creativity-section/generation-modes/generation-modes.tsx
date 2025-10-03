import { clsx } from 'clsx';

import RefreshArrow from '@/shared/assets/refreshArrow';

import styles from './generation-modes.module.scss';

interface Props {
  withoutTitle?: boolean;
}

export const GenerationModes = ({ withoutTitle = false }: Props) => {
  return (
    <div className={styles.container}>
      {!withoutTitle && (
        <p className={styles.title}>
          Далее будет доступно два режима генерации:
        </p>
      )}
      <div className={styles.modes}>
        <div className={styles.mode}>
          <p
            className={clsx(
              styles.modeTitle,
              withoutTitle && styles.modeTitleSecondary
            )}
          >
            Generate
          </p>
          <p className={styles.modeDescription}>Базовая модель генерации</p>
        </div>
        <div className={styles.mode}>
          <p
            className={clsx(
              styles.modeTitle,
              withoutTitle && styles.modeTitleSecondary
            )}
          >
            <RefreshArrow />- Regenerate
          </p>
          <p className={styles.modeDescription}>
            Генерация на основе выбранного изображения.{' '}
          </p>
          <p className={styles.modeDescription}>
            Улучшает сходство с фотографией, и не только
          </p>
        </div>
      </div>
    </div>
  );
};
