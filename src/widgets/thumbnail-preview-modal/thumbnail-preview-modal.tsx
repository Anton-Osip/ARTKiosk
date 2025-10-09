'use client';

import Image, { StaticImageData } from 'next/image';

import { RefreshArrow } from '@/shared/assets';
import { useTranslations } from '@/shared/lib';
import { Button, Modal } from '@/shared/ui';

import styles from './thumbnail-preview-modal.module.scss';

interface PhotoPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRetake: () => void;
  onConfirm: () => void;
  image: StaticImageData;
  id: string;
}

export function ThumbnailPreviewModal({
  isOpen,
  onClose,
  onRetake,
  onConfirm,
  image,
}: PhotoPreviewModalProps) {
  const t = useTranslations('ThumbnailPreviewModal');

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="lg"
      className={styles.modalContainer}
      modalWrapperClassName={styles.modalWrapper}
    >
      <div className={styles.thumbnailPreview}>
        {image && (
          <Image
            src={image}
            alt={t('imageAlt')}
            className={styles.thumbnail}
            width={630}
            height={840}
            style={{ objectFit: 'cover' }}
          />
        )}
      </div>

      <div className={styles.actionButtons}>
        <Button variant="secondary" size="md" onClick={onRetake}>
          <RefreshArrow />
          {t('regenerateButton')}
        </Button>

        <Button variant="primary" size="md" onClick={onConfirm}>
          {t('selectForPrintButton')}
        </Button>
      </div>
    </Modal>
  );
}
