'use client';

import { Button, IconContainer, Modal } from '@/shared/ui';

import styles from './info-modal.module.scss';

interface InfoModalProps {
  isOpen: boolean;
  title: string;
  description?: string;
  icon?: React.ReactNode;
  confirmButtonText: string;
  cancelButtonText?: string;
  onClose: () => void;
  onConfirm: () => void;
  mainButtonVariant?: 'primary' | 'secondary' | 'close';
  variant?: 'desktop' | 'mobile';
}

export function InfoModal({
  isOpen,
  onClose,
  title,
  description,
  icon,
  confirmButtonText = 'Confirm',
  cancelButtonText,
  onConfirm,
  mainButtonVariant = 'primary',
  variant = 'desktop',
}: InfoModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="md"
      className={`${styles.modal} ${variant === 'mobile' ? styles.mobile : ''}`}
      showCloseButton={false}
    >
      <div
        className={`${styles.content} ${variant === 'mobile' ? styles.mobileContent : ''}`}
      >
        <div
          className={`${styles.header} ${variant === 'mobile' ? styles.mobileHeader : ''}`}
        >
          {icon && <IconContainer size="md">{icon}</IconContainer>}
          <h2
            className={`${styles.title} ${variant === 'mobile' ? styles.mobileTitle : ''}`}
          >
            {title}
          </h2>
        </div>

        {description && (
          <p
            className={`${styles.description} ${variant === 'mobile' ? styles.mobileDescription : ''}`}
          >
            {description}
          </p>
        )}

        <div
          className={`${styles.buttonContainer} ${variant === 'mobile' ? styles.mobileButtonContainer : ''}`}
        >
          {cancelButtonText && (
            <Button
              variant={'secondary'}
              size="md"
              onClick={onClose}
              className={styles.cancelButton}
            >
              {cancelButtonText}
            </Button>
          )}
          <Button variant={mainButtonVariant} size="md" onClick={onConfirm}>
            {confirmButtonText}
          </Button>
        </div>
      </div>
    </Modal>
  );
}
