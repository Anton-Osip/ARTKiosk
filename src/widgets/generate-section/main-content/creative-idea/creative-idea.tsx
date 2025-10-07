'use client';

import Image from 'next/image';

import { ReloadArrow } from '@/shared/assets';
import { useTranslations } from '@/shared/lib';
import { Button } from '@/shared/ui';

import ideaImage1 from '../../../../../public/ideaImage1.png';
import ideaImage2 from '../../../../../public/ideaImage2.png';
import styles from './creative-idea.module.scss';

export const CreativeIdea = () => {
  const t = useTranslations('CreativityScreen.creativeIdea');

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.titleWrapper}>
          <p className={styles.subtitle}>{t('subtitle')}</p>
          <div className={styles.title}>{t('title')}</div>
        </div>
        <Button variant={'close'} className={styles.reloadBtn}>
          <ReloadArrow />
        </Button>
      </div>
      <div className={styles.imagesWrapper}>
        <div className={styles.image}>
          <Image src={ideaImage1} alt="idea" />
        </div>
        <div className={styles.image}>
          <Image src={ideaImage2} alt="idea" />
        </div>
      </div>
    </div>
  );
};
