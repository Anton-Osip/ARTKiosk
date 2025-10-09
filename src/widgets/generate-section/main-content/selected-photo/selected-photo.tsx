'use client';

import Image from 'next/image';

import { ReloadArrow } from '@/shared/assets';
import { useModalStore, usePhotoStore, useTranslations } from '@/shared/lib';
import { Button } from '@/shared/ui';

import styles from './selected-photo.module.scss';

interface Props {
  selectedPhoto: string;
}

export const SelectedPhoto = ({ selectedPhoto }: Props) => {
  const t = useTranslations('CreativityScreen.selectedPhoto');
  const { gender, ageGroup } = usePhotoStore();
  const { openModal } = useModalStore();

  const changePhoto = () => {
    openModal({
      type: 'gender-age',
      onConfirm: () => {},
      onDeletePhoto: () => {},
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.titleWrapper}>
          <p className={styles.title}>{t('title')}</p>
          <div
            className={styles.subtitle}
          >{`${ageGroup ? ageGroup : ''} ${gender}`}</div>
        </div>
        <Button
          variant={'close'}
          className={styles.reloadBtn}
          onClick={changePhoto}
        >
          <ReloadArrow />
        </Button>
      </div>
      <div className={styles.selectedPhoto}>
        <Image src={selectedPhoto} alt="selected phot" />
      </div>
    </div>
  );
};
