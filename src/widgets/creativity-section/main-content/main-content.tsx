import { memo } from 'react';

import { CreativeIdea } from './creative-idea/creative-idea';
import styles from './main-content.module.scss';
import { SelectedPhoto } from './selected-photo/selected-photo';

export const MainContent = memo(() => {
  return (
    <div className={styles.mainContent}>
      <SelectedPhoto />
      <CreativeIdea />
    </div>
  );
});

MainContent.displayName = 'MainContent';
