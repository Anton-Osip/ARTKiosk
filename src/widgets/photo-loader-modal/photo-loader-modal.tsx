'use client';

import { Loader } from '@/shared/assets';
import { useTranslations } from '@/shared/lib';
import { Modal } from '@/shared/ui';

import styles from './photo-loader-modal.module.scss';

type Props = {
  isOpen: boolean;
  onCloseAction: () => void;
};

export function PhotoLoaderModal({ isOpen, onCloseAction }: Props) {
  const t = useTranslations('Modals');

  return (
    <Modal
      isOpen={isOpen}
      onClose={onCloseAction}
      size="md"
      className={styles.modalContent}
    >
      <div className={styles.container}>
        <p>{t('photoLoader.loadingText')}</p>
        <div className={styles.cornerBox}>
          <div className={styles.loaderContainer}>
            <Loader />
          </div>
        </div>
      </div>
    </Modal>
  );
}
