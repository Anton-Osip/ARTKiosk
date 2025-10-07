'use client';

import { clsx } from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

import { Logotype } from '@/shared/assets';
import { useTranslations } from '@/shared/lib';

import styles from './header.module.scss';

type StageType = 'catalog' | 'creativity' | 'photo' | 'tuning';

const useGetStepItems = () => {
  const t = useTranslations('Header');

  return [
    {
      id: 'photo',
      label: t('step1'),
      icon: '/crystals/Gem1.png',
      percent: '85%',
    },
    {
      id: 'catalog',
      label: t('step2'),
      icon: '/crystals/Gem2.png',
      percent: '0%',
    },
    {
      id: 'creativity',
      label: t('step3'),
      icon: '/crystals/Gem3.png',
      percent: '0%',
    },
    {
      id: 'tuning',
      label: t('step4'),
      icon: '/crystals/Gem4.png',
      percent: '0%',
    },
  ] as const;
};

interface HeaderProps {
  activeTab?: StageType;
  className?: string;
}

export function Header({ activeTab, className }: HeaderProps) {
  const steps = useGetStepItems();
  const current = steps.find(({ id }) => id === activeTab);

  return (
    <header className={clsx(styles.header, className)}>
      {/* Logo Section */}
      <div className={styles.logoSection}>
        <Link href="/">
          <Logotype width={125} height={83} />
        </Link>
      </div>

      {/* Navigation */}
      {activeTab && (
        <ul className={styles.navigation}>
          {steps.map((item, index) => (
            <li
              key={item.id}
              className={`${styles.navItem} ${
                activeTab === item.id ? styles.active : ''
              }`}
              style={{ '--after-width': '50%' } as React.CSSProperties}
            >
              <Image
                src={item.icon}
                alt={'Gem'}
                width={40}
                height={40}
                style={{ height: 'auto' }}
              />
              <span>{`${index + 1}. ${item.label}`}</span>
            </li>
          ))}
          <li className={styles.line} style={{ width: current?.percent }}></li>
        </ul>
      )}
    </header>
  );
}
