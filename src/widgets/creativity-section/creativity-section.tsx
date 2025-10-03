import { FooterNavigation } from '@/widgets';

import styles from './creativity-section.module.scss';
import { GenerationModes } from './generation-modes';
import { LoadingIndicator } from './loading-indicator';
import { MainContent } from './main-content';

export const CreativitySection = () => {
  return (
    <div className={styles.container}>
      <MainContent />
      <GenerationModes />
      <LoadingIndicator />
      <FooterNavigation />
    </div>
  );
};
