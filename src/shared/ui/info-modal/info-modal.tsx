'use client';

import { ReactNode } from 'react';

import { Button, IconContainer, Modal } from '@/shared/ui';

import styles from './info-modal.module.scss';

interface InfoModalProps {
  isOpen: boolean;
  title: string;
  description?: string;
  subtitle?: string;
  iconPosition?: 'left' | 'right';
  icon?: ReactNode;
  confirmButtonText: string | ReactNode;
  cancelButtonText?: string | ReactNode;
  onClose: () => void;
  onConfirm: () => void;
  mainButtonVariant?: 'primary' | 'secondary' | 'close';
  variant?: 'desktop' | 'mobile';
  withoutButton?: boolean;
}

export function InfoModal({
  isOpen,
  onClose,
  title,
  description,
  subtitle,
  icon,
  confirmButtonText = 'Confirm',
  cancelButtonText,
  onConfirm,
  mainButtonVariant = 'primary',
  variant = 'desktop',
  withoutButton = false,
  iconPosition = 'left',
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
          {iconPosition === 'left' && icon && (
            <IconContainer size="md">{icon}</IconContainer>
          )}
          <h2
            className={`${styles.title} ${variant === 'mobile' ? styles.mobileTitle : ''}`}
          >
            {title}
            {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
          </h2>
          {iconPosition === 'right' && icon && (
            <IconContainer size="md" className={styles.iconPositionRight}>
              {icon}
            </IconContainer>
          )}
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
          {withoutButton || (
            <Button variant={mainButtonVariant} size="md" onClick={onConfirm}>
              {confirmButtonText}
            </Button>
          )}
        </div>
      </div>
    </Modal>
  );
}
