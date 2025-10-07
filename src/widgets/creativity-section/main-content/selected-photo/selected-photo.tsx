'use client';

import Image, { StaticImageData } from 'next/image';

import ReloadArrow from '@/shared/assets/reloadArrow';
import { useTranslations } from '@/shared/lib';
import { Button } from '@/shared/ui';

import styles from './selected-photo.module.scss';

interface Props {
  selectedPhoto: StaticImageData;
}

export const SelectedPhoto = ({ selectedPhoto }: Props) => {
  const t = useTranslations('CreativityScreen.selectedPhoto');

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.titleWrapper}>
          <p className={styles.title}>{t('title')}</p>
          <div className={styles.subtitle}>{t('subtitle')}</div>
        </div>
        <Button variant={'close'} className={styles.reloadBtn}>
          <ReloadArrow />
        </Button>
      </div>
      <div className={styles.selectedPhoto}>
        <Image src={selectedPhoto} alt="selected phot" />
      </div>
    </div>
  );
};
