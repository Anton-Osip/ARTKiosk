import Image, { StaticImageData } from 'next/image';
import { memo } from 'react';

import defaultsPhoto from '../../../../public/defaultsPhoto.png';
import { CreativeIdea } from './creative-idea/creative-idea';
import styles from './main-content.module.scss';
import { SelectedPhoto } from './selected-photo/selected-photo';

interface Props {
  selectedPhoto?: StaticImageData;
}

export const MainContent = memo(({ selectedPhoto }: Props) => {
  if (selectedPhoto) {
    return (
      <div className={styles.mainContent}>
        <SelectedPhoto selectedPhoto={selectedPhoto} />
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
