'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';

import {
  ArrowLeftToRight,
  ArrowScan,
  Basket,
  Camera,
  OrElement,
  SimpleArrow,
  UserCube,
  WarningTriangle,
} from '@/shared/assets';
import { useTakePhoto } from '@/shared/hooks';
import {
  ErrorData,
  useErrorStore,
  useLocaleStore,
  useModalStore,
  useSessionStatusStore,
  useSessionStore,
  useTranslations,
} from '@/shared/lib';
import { Button } from '@/shared/ui';
import { ChangeLanguage, QRDisplay } from '@/widgets';

import styles from './photo-section.module.scss';

export function PhotoSection() {
  const { locale } = useLocaleStore();
  const t = useTranslations('StartPhotoAddingScreen');
  const tm = useTranslations('Modals');
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { openModal } = useModalStore();
  const handleTakePhoto = useTakePhoto();
  const [showStatusError, setShowStatusError] = useState(true);
  const { fetchSessionData, sessionData, isLoading, error } = useSessionStore();
  const { sessionStatusData, fetchSessionStatus } = useSessionStatusStore();

  const { errorData } = useErrorStore();

  const showWrongModal = useCallback(
    (error?: ErrorData | null) => {
      openModal({
        type: 'info-confirm',
        title: error ? error.message : tm('wrongFormat.title'),
        description: error?.description || tm('wrongFormat.description'),
        icon: <WarningTriangle />,
        onConfirm: () => {},
        confirmButtonText: tm('wrongFormat.buttonApply'),
        onClose: () => {},
        buttonVariant: 'primary',
      });
    },
    [openModal, tm]
  );

  useEffect(() => {
    if (errorData && showStatusError) {
      showWrongModal(errorData);
      setShowStatusError(false);
    }
  }, [errorData, showStatusError, showWrongModal]);

  useEffect(() => {
    fetchSessionData(locale);
  }, [fetchSessionData, locale]);

  useEffect(() => {
    if (!sessionData?.session_id) return;
    fetchSessionStatus(sessionData?.session_id);

    const interval = setInterval(() => {
      fetchSessionStatus(sessionData?.session_id);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [sessionData?.session_id, fetchSessionStatus]);

  const handleContinueWithoutPhoto = () => {
    console.log('Continue without photo');
  };

  const title = t('title').split(' ');

  const showCancelModal = () => {
    openModal({
      type: 'info-confirm',
      title: tm('cancel'),
      description: tm('cancelLoading.title'),
      icon: <WarningTriangle />,
      confirmButtonText: tm('cancelLoading.buttonApply'),
      cancelButtonText: tm('cancelLoading.buttonCancel'),
      onConfirm: () => {
        showLoader();
      },
      onClose: () => {},
      buttonVariant: 'primary',
    });
  };

  const showLoader = () => {
    openModal({
      type: 'photo-loader',
      onClose: () => {
        showCancelModal();
      },
    });
  };

  const showError = useCallback(() => {
    openModal({
      type: 'info-error',
      title: tm('infoError.title'),
      buttonText: tm('infoError.reloadImage'),
      onConfirm: () => {},
    });
  }, [openModal, tm]);

  useEffect(() => {
    if (sessionStatusData?.status === 'pending') {
      // showLoader();
    } else if (sessionStatusData?.status === 'uploaded') {
      openModal({
        type: 'photo-preview',
        onRetake: () => {},
        onConfirm: () => {
          openModal({
            type: 'gender-age',
            onConfirm: () => {},
            onDeletePhoto: () => {},
          });
        },
      });
    } else if (sessionStatusData?.status === 'expired') {
      showError();
    }
  }, [openModal, sessionStatusData?.status, showError]);

  return (
    <div className={styles.photoSection}>
      {/* Main Title */}
      <h1 className={styles.mainTitle}>
        <span>{title[0]} </span>
        {title.slice(1, -2).join(' ')}
        <span> {title.slice(-2).join(' ')}</span>
      </h1>

      {/* Hero Image */}
      <div className={styles.heroImage}>
        <div className={styles.photoContainer}>
          <div className={styles.userIcon}>
            <UserCube />
          </div>
          <div className={styles.exampleCover}>
            <Image
              src={'/people/user-photo-example.png'}
              alt={'User photo example'}
              width={94}
              height={94}
              className={styles.photoExample}
            />
          </div>
          <ArrowLeftToRight className={styles.arrow} />
        </div>
        <div className={styles.heroContainer}>
          <Image
            priority
            src={'/people/knight.png'}
            width={458}
            height={451}
            alt={'Girl'}
            className={styles.heroCharacter}
          />
          <div className={styles.heroImageBg} />
        </div>
      </div>

      {/* Action Cards */}
      <div className={styles.actionCards}>
        {/* Left Card - Take Photo */}
        <div className={styles.orElement}>
          <span>{t('or')}</span>
          <OrElement />
        </div>

        <div className={`${styles.card} ${styles.cardLeft}`}>
          <div className={styles.cardTextWrapper}>
            <h2 className={styles.cardTitle}>{t('card1.title')}</h2>
            <p className={styles.cardSubtitle}>{t('card1.description')}</p>
          </div>
          <div className={styles.peopleContainer}>
            <Image
              className={styles.roundPhoto}
              src={'/people/card/girl3.png'}
              alt={'Girl'}
              width={88}
              height={88}
            />
            <Image
              className={styles.roundPhoto}
              src={'/people/card/boy1.png'}
              alt={'Boy'}
              width={130}
              height={130}
            />
            <Image
              className={styles.roundPhoto}
              src={'/people/card/girl1.png'}
              alt={'Girl'}
              width={164}
              height={164}
            />
            <Image
              className={styles.roundPhoto}
              src={'/people/card/girl2.png'}
              alt={'Girl'}
              width={130}
              height={130}
            />
            <Image
              className={styles.roundPhoto}
              src={'/people/card/boy2.png'}
              alt={'Boy'}
              width={88}
              height={88}
            />
          </div>
          <Button
            variant="primary"
            size="md"
            icon={<Camera width={36} height={36} />}
            onClick={handleTakePhoto}
            className={`${styles.actionButton}`}
            aria-label={'Take Photo'}
          />
        </div>

        {/* Right Card - Upload Photo */}
        <div className={`${styles.card} ${styles.cardRight}`}>
          <h2 className={styles.cardTitle}>{t('card2.title')}</h2>
          <span className={styles.scanAction}>{t('card2.button')}</span>
          <ArrowScan className={styles.arrowScan} />
          <QRDisplay
            fetchSessionData={fetchSessionData}
            error={error?.message}
            isLoadingInitData={isLoading}
            qrImageUrl={sessionData?.qr_url}
          />
        </div>
      </div>

      <div className={styles.bottomBlock}>
        <Button
          className={styles.continueButton}
          onClick={handleContinueWithoutPhoto}
          variant="secondary"
          size="lg"
        >
          {t('bottomButtons.continue')}
          <SimpleArrow />
        </Button>
        <div className={styles.buttonsPanel}>
          {/*<Button variant={'secondary'} size={'sm'}>{t('bottomButtons.changeLang')}</Button>*/}
          <ChangeLanguage />
          <Button
            onClick={() => showWrongModal()}
            variant={'secondary'}
            size={'sm'}
            className={styles.removeAll}
          >
            <Basket width={20} height={20} style={{ color: '#FF3535' }} />
            {t('bottomButtons.quit')}
          </Button>
          <Button
            onClick={showCancelModal}
            variant={'secondary'}
            size={'sm'}
            className={styles.next}
          >
            {t('bottomButtons.next')}
            <SimpleArrow height={20} width={20} />
          </Button>
          <Button
            onClick={showLoader}
            variant={'light'}
            size={'sm'}
            className={styles.helpButton}
          >
            {t('bottomButtons.help')}
          </Button>
          <Button onClick={showError} variant={'primary'} size={'sm'}>
            {t('bottomButtons.club')}
          </Button>
        </div>
      </div>

      {/* Hidden video and canvas for photo capture */}
      <video ref={videoRef} style={{ display: 'none' }} autoPlay playsInline />
      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </div>
  );
}
