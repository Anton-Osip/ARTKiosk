'use client';

import React, { useEffect, useRef } from 'react';

import Logotype from '@/shared/assets/logotype';
import {
  useMobileSessionStore,
  useUploadingPhotosStore,
  useUploadStore,
} from '@/shared/lib';
import { ErrorMobileScreen } from '@/widgets/mobile-screen.tsx/error-mobile-screen';

import styles from './mobile-screen.module.scss';
import { SelectPhotoScreen } from './select-photo-screen';
import { SubmittedPhotoScreen } from './submitted-photo-screen';
import { UploadedPhotoSection } from './uploaded-photo-section';

interface MobileScreenProps {
  qrToken?: string;
}

export const MobileScreen = ({ qrToken }: MobileScreenProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const {
    setImage,
    image,
    setUploadingError,
    isError: uploadingIsError,
  } = useUploadingPhotosStore();
  const { setQrToken, claimSession, clearError, sessionData } =
    useMobileSessionStore();
  const {
    uploadFile,
    isUploading,
    isCommit,
    isError: uploadIsError,
  } = useUploadStore();

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

  const closeWindow = () => {
    // window.close();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setImage(file);
  };

  const handleButtonClick = () => {
    setUploadingError(null);
    clearError();
    fileInputRef.current?.click();
  };

  const handleUpload = async () => {
    if (!image || !sessionData?.session_id) return;

    const inputFile = fileInputRef.current?.files?.[0];
    if (!inputFile) return;

    await uploadFile(inputFile, sessionData.session_id);
  };

  return (
    <div className={styles.mobileSection}>
      <div className={styles.container}>
        <header className={styles.header}>
          <Logotype width={77} height={52} />
        </header>
        <div className={styles.content}>
          {uploadIsError || uploadingIsError ? (
            <ErrorMobileScreen
              uploadIsError={uploadIsError}
              uploadingIsError={uploadingIsError}
              buttonClick={handleButtonClick}
            />
          ) : (
            <>
              {!image && <SelectPhotoScreen buttonClick={handleButtonClick} />}
              {image && !isCommit && (
                <UploadedPhotoSection
                  image={image}
                  buttonClick={handleButtonClick}
                  isUploading={isUploading}
                  handleUpload={handleUpload}
                />
              )}
              {image && isCommit && (
                <SubmittedPhotoScreen image={image} closeWindow={closeWindow} />
              )}
            </>
          )}
        </div>
      </div>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className={styles.hidden}
      />
    </div>
  );
};
