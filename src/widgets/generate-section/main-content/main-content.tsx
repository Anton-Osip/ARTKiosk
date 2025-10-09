import Image from 'next/image';
import { memo } from 'react';

import { usePhotoStore } from '@/shared/lib';

import defaultsPhoto from '../../../../public/defaultsPhoto.png';
import { CreativeIdea } from './creative-idea/creative-idea';
import styles from './main-content.module.scss';
import { SelectedPhoto } from './selected-photo/selected-photo';
export const MainContent = memo(() => {
  const { capturedPhoto } = usePhotoStore();

  if (capturedPhoto) {
    return (
      <div className={styles.mainContent}>
        <SelectedPhoto selectedPhoto={capturedPhoto} />
        <CreativeIdea />
      </div>
    );
  }

  return (
    <div className={styles.mainContentWithoutPhoto}>
      <Image
        src={defaultsPhoto}
        alt={'defaults photo'}
        className={styles.defaultsImage}
      />
      <CreativeIdea />
    </div>
  );
});

MainContent.displayName = 'MainContent';
