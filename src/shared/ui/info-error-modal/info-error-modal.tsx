'use client';

import { SadFace } from '@/shared/assets';
import { Button, Modal } from '@/shared/ui';

import styles from './info-error-modal.module.scss';

interface InfoModalProps {
  isOpen: boolean;
  title: string;
  buttonText: string;
  onCloseAction: () => void;
  onConfirm: () => void;
}

export function InfoErrorModal({
  isOpen,
  onCloseAction,
  title,
  onConfirm,
  buttonText,
}: InfoModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onCloseAction}
      size="md"
      className={styles.modal}
      showCloseButton={false}
    >
      <div className={styles.wrapper}>
        <SadFace />
        <p>{title}</p>
        <Button
          className={styles.button}
          onClick={onConfirm}
          variant={'primary'}
        >
          {buttonText}
        </Button>
      </div>
    </Modal>
  );
}
