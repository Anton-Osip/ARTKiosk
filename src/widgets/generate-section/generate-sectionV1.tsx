'use client';

import { useCallback, useEffect } from 'react';

import { WarningTriangle } from '@/shared/assets';
import { useGenerateStore, useModalStore } from '@/shared/lib';
import { FooterNavigation } from '@/widgets';

import { GenerateButton } from './generate-button/generate-button';
import styles from './generate-section.module.scss';
import { GenerationModes } from './generation-modes';
import { LoadingIndicator } from './loading-indicator';
import { MainContent } from './main-content';
import { ResultsGallery } from './results-gallery';

export const GenerateSectionV1 = () => {
  const { openModal } = useModalStore();
  const {
    generateData,
    generationCounter,
    isGenerated,
    timer,
    generatedThumbnail,
  } = useGenerateStore();

  const showErrorModal = useCallback(() => {
    openModal({
      type: 'info-confirm',
      title: 'Упс...',
      description:
        'Оплата не прошла, повторите оплату, или обратитесь к продавцу',
      icon: <WarningTriangle />,
      confirmButtonText: '',
      onConfirm: () => {},
      buttonVariant: 'primary',
      onClose: () => {
        console.log('close');
        openModal({
          type: 'select-payment-method-modal',
          showErrorModal: showErrorModal,
          isPayWithCard: true,
        });
      },
      withoutButton: true,
    });
  }, [openModal]);

  const showSelectPaymentModal = useCallback(() => {
    openModal({
      type: 'select-payment-method-modal',
      showErrorModal: showErrorModal,
    });
  }, [openModal, showErrorModal]);

  const generatedThumbnailHandler = () => {
    if (generationCounter <= 0) {
      showSelectPaymentModal();
    } else {
      generatedThumbnail();
    }
  };

  useEffect(() => {
    generatedThumbnail();
  }, [generatedThumbnail]);

  useEffect(() => {
    if (generationCounter === 0) showSelectPaymentModal();
  }, [generationCounter, showSelectPaymentModal]);

  return (
    <div className={styles.container}>
      <MainContent />
      <GenerationModes
        withoutTitle={generateData?.length !== 0}
        isPaid={generationCounter > 1}
        generationCounter={generationCounter}
      />
      {isGenerated && (
        <LoadingIndicator
          time={timer}
          regenerateMode={generateData?.length !== 0}
        />
      )}
      {generateData?.length !== 0 && !isGenerated && (
        <ResultsGallery withScrolling={generateData?.length >= 4} />
      )}
      {generateData?.length !== 0 && (
        <GenerateButton
          onClick={generatedThumbnailHandler}
          disabled={generationCounter <= 0}
        />
      )}
      <FooterNavigation />
    </div>
  );
};
