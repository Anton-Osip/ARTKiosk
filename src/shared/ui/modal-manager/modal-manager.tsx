'use client';

import { useModalStore } from '@/shared/lib';
import { InfoErrorModal, InfoModal } from '@/shared/ui';
import {
  CameraPreview,
  GenderAgeModal,
  PhotoLoaderModal,
  PhotoPreviewModal,
  SelectPaymentMethodModal,
} from '@/widgets';

export function ModalManager() {
  const { modalData, closeModal } = useModalStore();

  if (!modalData) return null;

  switch (modalData.type) {
    case 'select-payment-method-modal':
      return (
        <SelectPaymentMethodModal
          isOpen={true}
          onClose={closeModal}
          setIsPaidOff={modalData.setIsPaidOff}
        />
      );
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
          withoutButton={modalData.withoutButton}
        />
      );

    default:
      return null;
  }
}
