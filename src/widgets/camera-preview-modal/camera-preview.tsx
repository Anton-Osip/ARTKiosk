'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import { Camera, Loader, WarningRound } from '@/shared/assets';
import {
  AgeGroup,
  Gender,
  useModalStore,
  usePhotoStore,
  useTranslations,
} from '@/shared/lib';
import { Button, InstructionPanel, LoadingSpinner, Modal } from '@/shared/ui';

import styles from './camera-preview.module.scss';

interface CameraPreviewProps {
  isOpen: boolean;
  onClose: () => void;
  onCapture: (imageData: string) => void;
}

export function CameraPreview({
  isOpen,
  onClose,
  onCapture,
}: CameraPreviewProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [, setStream] = useState<MediaStream | null>(null);
  const [isCapturing, setIsCapturing] = useState(false);
  const [capturedImage, setCapturedImage] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const t = useTranslations('StartPhotoAddingScreen.CaptureModal');
  const tm = useTranslations('Modals');

  const { setCapturedPhoto, capturedPhoto } = usePhotoStore();
  const { openModal } = useModalStore();

  const stopCamera = useCallback(() => {
    setStream(currentStream => {
      if (currentStream) {
        currentStream.getTracks().forEach(track => track.stop());
      }

      return null;
    });

    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }

    setIsLoading(false);
  }, []);

  const startCamera = useCallback(async () => {
    try {
      if (videoRef.current?.srcObject) {
        console.log('Camera already running, skipping...');

        return;
      }

      setIsLoading(true);
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: 'user',
          width: { ideal: 1920 },
          height: { ideal: 1080 },
        },
      });

      setStream(mediaStream);

      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
        videoRef.current.onloadedmetadata = () => {
          console.log('Video metadata loaded');
          videoRef.current?.play().catch(console.error);
          setIsLoading(false);
        };
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
      if (error instanceof Error) {
        console.error('Error details:', error.name, error.message);
      }
      openModal({
        type: 'info-error',
        title: tm('infoError.title'),
        buttonText: tm('infoError.reloadImage'),
        onConfirm: () => {},
      });
      setIsLoading(false);
    }
  }, [openModal, tm]);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        startCamera();
      }, 100);

      return () => clearTimeout(timer);
    } else {
      stopCamera();
    }
  }, [isOpen, startCamera, stopCamera]);

  const handleCapture = () => {
    if (videoRef.current && canvasRef.current) {
      setIsCapturing(true);

      const canvas = canvasRef.current;
      const video = videoRef.current;
      const context = canvas.getContext('2d');

      if (context) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        context.drawImage(video, 0, 0);

        const imageData = canvas.toDataURL('image/jpeg', 0.8);
        setCapturedImage(imageData);
        setCapturedPhoto(imageData);
        openModal({
          type: 'photo-preview',
          onRetake: handleRetake,
          onConfirm: handleConfirm,
        });
        setIsCapturing(false);
      }
    }
  };

  const handleRetake = () => {
    setCapturedImage('');
    // Close photo preview modal and reopen camera preview modal
    openModal({
      type: 'camera-preview',
      onCapture: onCapture,
    });
  };

  const handleConfirm = () => {
    try {
      console.log(
        'handleConfirm called, capturedImage length:',
        capturedImage.length
      );
      openModal({
        type: 'gender-age',
        onConfirm: handleGenderAgeConfirm,
        onDeletePhoto: handleDeletePhoto,
      });
      console.log('Gender age modal should be showing now');
    } catch (error) {
      console.error('Error in handleConfirm:', error);
      openModal({
        type: 'info-error',
        title: tm('infoError.title'),
        buttonText: tm('infoError.reloadImage'),
        onConfirm: () => {},
      });
    }
  };

  const handleGenderAgeConfirm = (gender: Gender, ageGroup: AgeGroup) => {
    try {
      console.log('Gender:', gender, 'Age Group:', ageGroup);
      if (capturedPhoto) {
        onCapture(capturedPhoto);
      }
      setCapturedImage('');
      onClose();
    } catch (error) {
      console.error('Error in handleGenderAgeConfirm:', error);
      openModal({
        type: 'info-error',
        title: tm('infoError.title'),
        buttonText: tm('infoError.reloadImage'),
        onConfirm: () => {},
      });
    }
  };

  const handleDeletePhoto = () => {
    setCapturedPhoto('');
    setCapturedImage('');
    onClose();
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="lg"
        className={styles.cameraContainer}
        infoElement={
          isOpen && (
            <InstructionPanel
              className={styles.instructionPanelContainer}
              icon={<WarningRound />}
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
        {/* Camera Preview */}
        <div className={styles.cameraPreview}>
          {isLoading && (
            <div className={styles.loadingOverlay}>
              <LoadingSpinner size="md" />
              <p>Загрузка камеры...</p>
            </div>
          )}
          {isCapturing && (
            <div className={styles.capturingOverlay}>
              <div className={styles.capturingContent}>
                <Loader />
                <Button
                  variant="close"
                  size="md"
                  onClick={onClose}
                  className={styles.capturingCloseButton}
                >
                  {tm('cancel')}
                </Button>
              </div>
            </div>
          )}
          <video
            ref={videoRef}
            className={styles.video}
            autoPlay
            playsInline
            muted
            style={{ display: isLoading ? 'none' : 'block' }}
          />
        </div>

        {/* Capture Button */}
        <Button
          variant="primary"
          size="md"
          icon={<Camera />}
          onClick={handleCapture}
          disabled={isCapturing || isLoading}
          className={styles.captureButton}
        />
      </Modal>

      {/* Hidden canvas for capture */}
      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </>
  );
}
