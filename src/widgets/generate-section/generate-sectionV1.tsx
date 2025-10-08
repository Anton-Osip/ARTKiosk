'use client';

import { useCallback, useEffect } from 'react';

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

  const showSelectPaymentModal = useCallback(() => {
    openModal({
      type: 'select-payment-method-modal',
      setIsPaidOff: () => {},
    });
  }, [openModal]);

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
          onClick={generatedThumbnail}
          disabled={generationCounter <= 0}
        />
      )}
      <FooterNavigation />
    </div>
  );
};
