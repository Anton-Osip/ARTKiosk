'use client';

import Link from 'next/link';

import { useTranslations } from '@/shared/lib/locale-provider';
import { Button } from '@/shared/ui';
import { Header } from '@/widgets';

import styles from './page.module.scss';

export default function Home() {
  const t = useTranslations('MainScreen');

  return (
    <div className={styles.landingPage}>
      <Header />
      <div className={styles.backgroundImage} />

      <div className={styles.bottomSection}>
        <h2 className={styles.bottomTitle}>Feel the future now</h2>

        <Button variant="primary" size="lg" className={styles.startButton}>
          <Link href="/parameters">{t('startButton')}</Link>
        </Button>
      </div>

      <div className={styles.languageSelector}>
        <div className={styles.languageButton}>
          <span>En</span>
        </div>
        <div className={styles.languageButton}>
          <span>Fr</span>
        </div>
        <div className={styles.languageButton}>
          <span>Pt</span>
        </div>
      </div>
    </div>
  );
}
