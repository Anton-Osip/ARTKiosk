'use client';

import Image from 'next/image';

import ReloadArrow from '@/shared/assets/reloadArrow';
import { useTranslations } from '@/shared/lib';
import { Button } from '@/shared/ui';

import selectedPhoto from '../../../../../public/selectedPhoto.png';
import styles from './selected-photo.module.scss';

export const SelectedPhoto = () => {
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
      <div className={styles.imageWrapper}>
        <Image src={selectedPhoto} alt="selected phot" />
      </div>
    </div>
  );
};
