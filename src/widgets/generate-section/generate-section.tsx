'use client';

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

import { Close, SadFace, WarningRound } from '@/shared/assets';
import { useGenerateStore, useModalStore } from '@/shared/lib';
import { FooterNavigation } from '@/widgets';

import { GenerateButton } from './generate-button/generate-button';
import styles from './generate-section.module.scss';
import { GenerationModes } from './generation-modes';
import { LoadingIndicator } from './loading-indicator';
import { MainContent } from './main-content';
import { ResultsGallery } from './results-gallery';

interface Props {
  withEmptyGeneration?: boolean;
}

export const GenerateSection = ({ withEmptyGeneration = false }: Props) => {
  const { openModal, closeModal } = useModalStore();
  const {
    generateData,
    generationCounter,
    isGenerated,
    timer,
    generatedThumbnail,
    setGenerationCounter,
  } = useGenerateStore();

  const isAganShowSelectedPayModalRef = useRef<boolean>(false);
  const [hasCompletedFirstGeneration, setHasCompletedFirstGeneration] =
    useState(false);
  const [hasTriggeredAutoGeneration, setHasTriggeredAutoGeneration] =
    useState(false);

  useLayoutEffect(() => {
    if (withEmptyGeneration) {
      setGenerationCounter(1);
    }
  }, [setGenerationCounter, withEmptyGeneration]);

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
    if (!hasCompletedFirstGeneration) generatedThumbnail();
  }, [generatedThumbnail, hasCompletedFirstGeneration]);

  // Автоматический запуск генерации после первой оплаты при withEmptyGeneration = false
  useEffect(() => {
    if (
      !withEmptyGeneration &&
      !hasTriggeredAutoGeneration &&
      generationCounter > 0 &&
      generateData.length === 0
    ) {
      setHasTriggeredAutoGeneration(true);
      generatedThumbnail();
    }
  }, [
    withEmptyGeneration,
    hasTriggeredAutoGeneration,
    generationCounter,
    generateData.length,
    generatedThumbnail,
  ]);

  useEffect(() => {
    if (
      !hasCompletedFirstGeneration &&
      !isGenerated &&
      (generateData?.length ?? 0) > 0
    ) {
      setHasCompletedFirstGeneration(true);
    }
  }, [generateData, isGenerated, hasCompletedFirstGeneration]);

  useEffect(() => {
    if (withEmptyGeneration) {
      if (generateData.length > 0) {
        isAganShowSelectedPayModalRef.current = true;
      }
    } else {
      isAganShowSelectedPayModalRef.current = true;
    }
  }, [generateData.length, withEmptyGeneration]);

  return (
    <div className={styles.container}>
      <MainContent />
      <GenerationModes
        withoutTitle={generateData?.length !== 0}
        isPaid={generationCounter > 1}
        generationCounter={generationCounter * 4}
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
      {(hasCompletedFirstGeneration || !isGenerated) && (
        <GenerateButton
          onClick={generatedThumbnail}
          disabled={generationCounter <= 0}
        />
      )}
      <FooterNavigation />
    </div>
  );
};
