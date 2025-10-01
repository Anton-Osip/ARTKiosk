'use client';

import React from 'react';

import { Button } from '@/shared';

import styles from './modal.module.scss';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
  overlayClassName?: string;
  closeButtonClassName?: string;
  showCloseButton?: boolean;
  closeOnOverlayClick?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  infoElement?: React.ReactNode;
}

export function Modal({
  isOpen,
  onClose,
  children,
  className = '',
  overlayClassName = '',
  closeButtonClassName = '',
  showCloseButton = true,
  closeOnOverlayClick = true,
  size = 'md',
  infoElement,
}: ModalProps) {
  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (closeOnOverlayClick && e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className={`${styles.overlay} ${overlayClassName}`} 
      onClick={handleOverlayClick}
    >
      <div className={styles.modalWrapper}>
        <div className={`${styles.modal} ${styles[size]} ${className}`}>
          {showCloseButton && (
            <Button
              variant="close"
              size="lg"
              onClick={onClose}
              className={`${styles.closeButton} ${closeButtonClassName}`}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M18 6L6 18M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
          )}
          {children}
        </div>
        {infoElement && infoElement}
      </div>
    </div>
  );
}
