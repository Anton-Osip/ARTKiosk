'use client';

import Image from 'next/image';

import Apply from '@/shared/assets/apply';
import Retry from '@/shared/assets/retry';
import Warning from '@/shared/assets/warningRound';
import { usePhotoStore, useTranslations } from '@/shared/lib';
import { Button, InstructionPanel, Modal } from '@/shared/ui';

import styles from './photo-preview-modal.module.scss';

interface PhotoPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRetake: () => void;
  onConfirm: () => void;
}

export function PhotoPreviewModal({
  isOpen,
  onClose,
  onRetake,
  onConfirm,
}: PhotoPreviewModalProps) {
  const { capturedPhoto } = usePhotoStore();
  const t = useTranslations('StartPhotoAddingScreen.CaptureModal');

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="lg"
        className={styles.modalContainer}
        infoElement={
          isOpen && (
            <InstructionPanel
              icon={<Warning />}
              text={
                <span className={styles.info}>
                  <span>{t('info1')}</span>
                  <span>{t('info2')}</span>
                </span>
              }
            />
          )
        }
      >
        {/* Photo Preview */}
        <div className={styles.photoPreview}>
          {capturedPhoto && (
            <Image
              src={capturedPhoto}
              alt="Captured photo"
              className={styles.photo}
              width={630}
              height={840}
              style={{ objectFit: 'cover' }}
            />
          )}
        </div>

        {/* Action Buttons */}
        <div className={styles.actionButtons}>
          <Button
            variant="secondary"
            size="md"
            icon={<Retry />}
            onClick={onRetake}
            //className={styles.retakeButton}
          />

          <Button
            variant="primary"
            size="md"
            icon={<Apply />}
            onClick={onConfirm}
            //className={styles.confirmButton}
          />
        </div>
      </Modal>
    </>
  );
}
