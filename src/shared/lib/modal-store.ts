'use client';

import React from 'react';
import { create } from 'zustand';

import { type AgeGroup, type Gender } from './photo-store';

export type ModalData =
  | { type: 'camera-preview'; onCapture: (imageData: string) => void }
  | { type: 'photo-preview'; onRetake: () => void; onConfirm: () => void }
  | {
      type: 'gender-age';
      onConfirm: (gender: Gender, ageGroup: AgeGroup) => void;
      onDeletePhoto: () => void;
    }
  | { type: 'qr'; sessionId: string }
  | { type: 'photo-loader'; onClose?: () => void }
  | {
      type: 'info-error';
      title: string;
      buttonText: string;
      onConfirm: () => void;
    }
  | {
      type: 'info-confirm';
      title: string;
      description: string;
      icon?: React.ReactNode;
      confirmButtonText: string;
      cancelButtonText?: string;
      onClose: () => void;
      onConfirm: () => void;
      buttonVariant?: 'primary' | 'secondary' | 'close';
      variant?: 'desktop' | 'mobile';
    }
  | null;

interface ModalStore {
  modalData: ModalData;
  openModal: (data: ModalData) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalStore>(set => ({
  modalData: null,

  openModal: data => {
    set({ modalData: data });
  },

  closeModal: () => {
    set({ modalData: null });
  },
}));
