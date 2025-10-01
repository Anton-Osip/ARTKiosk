'use client';

import React from 'react';

import { useModalStore } from '@/shared/lib/modal-store';
import { InfoErrorModal } from '@/shared/ui/info-error-modal/info-error-modal';
import { InfoModal } from '@/shared/ui/info-modal/info-modal';
import { CameraPreview } from '@/widgets';
import { GenderAgeModal, PhotoLoaderModal, PhotoPreviewModal } from '@/widgets';

export function ModalManager() {
  const { modalData, closeModal } = useModalStore();

  if (!modalData) return null;

  // Type-safe rendering based on discriminated union
  switch (modalData.type) {
    case 'camera-preview':
      return (
        <CameraPreview
          isOpen={true}
          onClose={closeModal}
          onCapture={modalData.onCapture}
        />
      );

    case 'photo-preview':
      return (
        <PhotoPreviewModal
          isOpen={true}
          onClose={closeModal}
          onRetake={modalData.onRetake}
          onConfirm={modalData.onConfirm}
        />
      );

    case 'gender-age':
      return (
        <GenderAgeModal
          isOpen={true}
          onClose={closeModal}
          onConfirm={modalData.onConfirm}
          onDeletePhoto={modalData.onDeletePhoto}
        />
      );

    case 'photo-loader':
      return (
        <PhotoLoaderModal
          isOpen={true}
          onCloseAction={modalData.onClose || closeModal}
        />
      );

    case 'info-error':
      return (
        <InfoErrorModal
          isOpen={true}
          onCloseAction={closeModal}
          onConfirm={modalData.onConfirm}
          title={modalData.title}
          buttonText={modalData.buttonText}
        />
      );

    case 'info-confirm':
      return (
        <InfoModal
          isOpen={true}
          onClose={closeModal}
          title={modalData.title}
          description={modalData.description}
          icon={modalData.icon}
          cancelButtonText={modalData.cancelButtonText}
          confirmButtonText={modalData.confirmButtonText}
          onConfirm={modalData.onConfirm}
          mainButtonVariant={modalData.buttonVariant}
          variant={modalData.variant}
        />
      );

    default:
      return null;
  }
}
