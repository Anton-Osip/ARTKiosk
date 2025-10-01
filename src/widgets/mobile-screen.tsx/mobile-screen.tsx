'use client';

import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

import {
  Button,
  InstructionPanel,
  LoadingSpinner,
  useModalStore,
} from '@/shared';
import Download from '@/shared/assets/download';
import Logotype from '@/shared/assets/logotype';
import PhotoCamera from '@/shared/assets/photoCamera';
import SadFace from '@/shared/assets/sadFace';
import Warning from '@/shared/assets/warningRound';
import WarningTriangle from '@/shared/assets/warningTriangle';
import { useMobileSessionStore } from '@/shared/lib/mobile-session-store';
import { useUploadStore } from '@/shared/lib/upload-store';
import { useUploadingPhotosStore } from '@/shared/lib/uploading-photos-store';

import styles from './mobile-screen.module.scss';

interface MobileScreenProps {
  qrToken?: string;
}

export const MobileScreen = ({ qrToken }: MobileScreenProps) => {
  const { setImage, image, setUploadingError, uploadingError } =
    useUploadingPhotosStore();
  const { setQrToken, claimSession, clearError, error, sessionData } =
    useMobileSessionStore();
  const {
    uploadFile,
    isUploading,
    isCommit,
    error: uploadError,
    clearError: clearUploadError,
  } = useUploadStore();

  const { openModal } = useModalStore();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const closeWindow = () => {
    window.close();
  };

  useEffect(() => {
    if (isCommit) {
      const timer = setTimeout(closeWindow, 5000);

      return () => clearTimeout(timer);
    }
  }, [isCommit]);

  useEffect(() => {
    if (qrToken) {
      setQrToken(qrToken);
      claimSession();
    }
  }, [qrToken, setQrToken, claimSession]);

  useEffect(() => {
    if (error) {
      openModal({
        type: 'info-confirm',
        title: 'Ошибка подключения',
        description: `Статус: ${error.status}. ${error.message}`,
        icon: <WarningTriangle />,
        confirmButtonText: 'Понятно',
        onConfirm: () => {
          clearError();
        },
        onClose: () => {
          clearError();
        },
        buttonVariant: 'primary',
        variant: 'mobile',
      });
    }
  }, [error, openModal, clearError]);

  useEffect(() => {
    if (uploadError) {
      openModal({
        type: 'info-confirm',
        title: 'Ошибка загрузки',
        description: `Статус: ${uploadError.status}. ${uploadError.message}`,
        icon: <WarningTriangle />,
        confirmButtonText: 'Понятно',
        onConfirm: () => {
          clearUploadError();
        },
        onClose: () => {
          clearUploadError();
        },
        buttonVariant: 'primary',
        variant: 'mobile',
      });
    }
  }, [uploadError, openModal, clearUploadError]);

  const handleButtonClick = () => {
    setUploadingError(null);
    clearError();
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) return;

    setImage(file);
  };

  const handleUpload = async () => {
    if (!image || !sessionData?.session_id) return;

    let file: File;
    if (typeof image === 'string') {
      // Если image это URL, нужно получить файл из input
      const inputFile = fileInputRef.current?.files?.[0];
      if (!inputFile) return;
      file = inputFile;
    } else {
      file = image;
    }
    await uploadFile(file, sessionData.session_id);
  };

  return (
    <div className={styles.mobileSection}>
      <div className={styles.container}>
        <header className={styles.header}>
          <Logotype width={77} height={52} />
        </header>
        <div className={styles.content}>
          {!image && !uploadingError && (
            <div className={styles.cornerBox} onClick={handleButtonClick}>
              <div className={styles.cornerTopLeft}></div>
              <div className={styles.cornerTopRight}></div>
              <div className={styles.cornerBottomLeft}></div>
              <div className={styles.cornerBottomRight}></div>
              <div className={styles.cornerContainer}>
                <PhotoCamera />
                <h2 className={styles.title}>Feel the future now</h2>
                <span className={styles.subTitle}>JPG/PNG до 5 mb</span>
              </div>
            </div>
          )}

          {(uploadingError || uploadError) && (
            <div className={styles.cornerBox} onClick={handleButtonClick}>
              <div className={styles.cornerTopLeft}></div>
              <div className={styles.cornerTopRight}></div>
              <div className={styles.cornerBottomLeft}></div>
              <div className={styles.cornerBottomRight}></div>
              <div className={styles.cornerContainer}>
                <div className={styles.errorBox}>
                  <SadFace />
                  <span className={styles.title}>Упс...</span>
                </div>
                <span className={styles.subTitle}>
                  {uploadError && 'Произошёл сбой'}
                  {uploadingError &&
                    'Фото не соответствует требованиям системы'}
                </span>
              </div>
            </div>
          )}

          {image && !uploadingError && (
            <div className={styles.photoContainer}>
              {image && (
                <Image
                  src={image}
                  alt="download image"
                  className={styles.photo}
                  width={298}
                  height={395}
                  style={{ objectFit: 'cover' }}
                />
              )}
            </div>
          )}

          <InstructionPanel
            className={styles.instructionPanel}
            icon={<Warning width={24} height={24} />}
            text={
              <span className={styles.instructionText}>
                На фото должен быть только один человек. Убедитесь что селфи
                удачное и хорошего качества.
              </span>
            }
          />
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            className={styles.hidden}
          />

          {isCommit && (
            <Button onClick={closeWindow} className={styles.sentPhoto}>
              Фото отправлено
            </Button>
          )}

          {!image && !uploadingError && (
            <Button
              onClick={handleButtonClick}
              className={styles.downloadBtn}
              icon={<Download />}
            >
              Загрузить
            </Button>
          )}
          {!image && uploadingError && (
            <Button onClick={handleButtonClick} className={styles.downloadBtn}>
              Заменить фото
            </Button>
          )}
          {image && !uploadingError && !isCommit && (
            <div className={styles.btnContainer}>
              <Button
                variant={'secondary'}
                onClick={handleButtonClick}
                className={styles.downloadBtn}
                disabled={isUploading}
              >
                Заменить
              </Button>
              <Button
                className={styles.downloadBtn}
                onClick={handleUpload}
                disabled={isUploading}
              >
                {isUploading ? (
                  <LoadingSpinner size="md" className={styles.loadingSpinner} />
                ) : (
                  'Отправить'
                )}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
