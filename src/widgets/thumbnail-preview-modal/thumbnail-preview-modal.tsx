'use client';

import Image, { StaticImageData } from 'next/image';

import { RefreshArrow } from '@/shared/assets';
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
            alt="Captured photo"
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
          Regenerate
        </Button>

        <Button variant="primary" size="md" onClick={onConfirm}>
          Выбрать для печати
        </Button>
      </div>
    </Modal>
  );
}
