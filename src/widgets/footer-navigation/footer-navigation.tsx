'use client';

import Basket from '@/shared/assets/basket';
import SimpleArrow from '@/shared/assets/simpleArrow';
import { useTranslations } from '@/shared/lib';
import { Button } from '@/shared/ui';

import styles from './footer-navigation.module.scss';

export const FooterNavigation = () => {
  const t = useTranslations('CreativityScreen.footer');

  return (
    <footer className={styles.footer}>
      <Button
        onClick={() => {}}
        variant={'secondary'}
        size={'sm'}
        className={styles.back}
      >
        <SimpleArrow height={20} width={20} className={styles.backArrow} />
        {t('back')}
      </Button>
      <Button
        onClick={() => {}}
        variant={'secondary'}
        size={'sm'}
        className={styles.removeAll}
      >
        <Basket width={20} height={20} style={{ color: '#FF3535' }} />
        {t('quit')}
      </Button>
      <Button
        onClick={() => {}}
        variant={'secondary'}
        size={'sm'}
        className={styles.next}
      >
        {t('next')}
        <SimpleArrow height={20} width={20} />
      </Button>
      <div className={styles.buttonsPanel}>
        <Button
          onClick={() => {}}
          variant={'light'}
          size={'sm'}
          className={styles.helpButton}
        >
          {t('help')}
        </Button>
        <Button onClick={() => {}} variant={'primary'} size={'sm'}>
          {t('club')}
        </Button>
      </div>
    </footer>
  );
};
