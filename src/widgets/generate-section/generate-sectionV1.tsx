'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import { Close, SadFace, WarningRound } from '@/shared/assets';
import { useGenerateStore, useModalStore } from '@/shared/lib';
import { FooterNavigation } from '@/widgets';

import { GenerateButton } from './generate-button/generate-button';
import styles from './generate-section.module.scss';
import { GenerationModes } from './generation-modes';
import { LoadingIndicator } from './loading-indicator';
import { MainContent } from './main-content';
import { ResultsGallery } from './results-gallery';

export const GenerateSectionV1 = () => {
  const { openModal, closeModal } = useModalStore();
  const {
    generateData,
    generationCounter,
    isGenerated,
    timer,
    generatedThumbnail,
  } = useGenerateStore();

  const isAganShowSelectedPayModalRef = useRef<boolean>(false);
  const [hasCompletedFirstGeneration, setHasCompletedFirstGeneration] =
    useState(false);

  const showErrorModal = useCallback(() => {
    openModal({
      type: 'info-confirm',
      title: 'Упс...',
      description:
        'Оплата не прошла, повторите оплату, или обратитесь к продавцу',
      icon: <SadFace />,
      confirmButtonText: '',
      onConfirm: () => {},
      buttonVariant: 'primary',
      onClose: () => {
        openModal({
          type: 'select-payment-method-modal',
          showErrorModal: showErrorModal,
          isPayWithCard: true,
        });
      },
      withoutButton: true,
    });
  }, [openModal]);

  const selectPaymentModal = useCallback(() => {
    openModal({
      type: 'select-payment-method-modal',
      showErrorModal: showErrorModal,
      isAgain: isAganShowSelectedPayModalRef.current,
    });
  }, [openModal, showErrorModal]);

  const showSelectPaymentModal = useCallback(() => {
    if (!isAganShowSelectedPayModalRef.current) {
      selectPaymentModal();
      isAganShowSelectedPayModalRef.current = true;
    } else {
      openModal({
        type: 'info-confirm',
        title: 'Внимание',
        description:
          'Для продолжения творчества повтори оплату или закрой это окно и выбери лучшее из созданных изображений.',
        subtitle: 'Закончились оплаченные попытки генерации',
        icon: <WarningRound className={styles.warningRoundIcon} />,
        iconPosition: 'right',
        confirmButtonText: 'Pay',
        cancelButtonText: <Close className={styles.closeIcon} />,
        onConfirm: selectPaymentModal,
        onClose: () => {
          closeModal();
        },
        buttonVariant: 'primary',
      });
    }
  }, [closeModal, openModal, selectPaymentModal]);

  useEffect(() => {
    if (generationCounter === 0) {
      showSelectPaymentModal();
    }
  }, [generationCounter, showSelectPaymentModal]);

  useEffect(() => {
    generatedThumbnail();
  }, [generatedThumbnail]);

  // Mark first generation as completed once results appear (and loading stops)
  useEffect(() => {
    if (
      !hasCompletedFirstGeneration &&
      !isGenerated &&
      (generateData?.length ?? 0) > 0
    ) {
      setHasCompletedFirstGeneration(true);
    }
  }, [generateData, isGenerated, hasCompletedFirstGeneration]);

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
      {hasCompletedFirstGeneration && (
        <GenerateButton
          onClick={generatedThumbnail}
          disabled={generationCounter <= 0}
        />
      )}
      <FooterNavigation />
    </div>
  );
};
