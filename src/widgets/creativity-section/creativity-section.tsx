'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import { useModalStore } from '@/shared/lib';
import { FooterNavigation } from '@/widgets';

import styles from './creativity-section.module.scss';
import { GenerateButton } from './generate-button/generate-button';
import { GenerationModes } from './generation-modes';
import { LoadingIndicator } from './loading-indicator';
import { MainContent } from './main-content';
import { ResultsGallery } from './results-gallery';

export const CreativitySection = () => {
  const { openModal } = useModalStore();
  const [time, setTime] = useState<number>(0);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setTime(prev => {
        const next = +(prev + 0.01).toFixed(2);
        if (next >= 5) {
          if (intervalRef.current !== null) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }

          return 5;
        }

        return next;
      });
    }, 10);

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, []);
  const showWrongModal = useCallback(() => {
    openModal({
      type: 'select-payment-method-modal',
    });
  }, [openModal]);

  return (
    <div className={styles.container}>
      <MainContent />
      <GenerationModes withoutTitle={time === 5} />
      {time !== 5 ? <LoadingIndicator time={time} /> : <ResultsGallery />}
      {time === 5 && <GenerateButton onClick={showWrongModal} />}
      <FooterNavigation />
    </div>
  );
};
