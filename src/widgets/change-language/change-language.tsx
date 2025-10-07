'use client';

import { useState } from 'react';

import { EnIcon, FrIcon, RuIcon } from '@/shared/assets';
import { useLocale, useTranslations } from '@/shared/lib';
import { Button, Overlay } from '@/shared/ui';
import { LangButton } from '@/widgets/change-language/lang-button/lang-button';

import styles from './change-language.module.scss';

export const LANGUAGES = [
  { title: 'English', code: 'en', icon: <EnIcon width={28} height={28} /> },
  { title: 'Русский', code: 'ru', icon: <RuIcon width={28} height={28} /> },
  { title: 'France', code: 'fr', icon: <FrIcon width={28} height={28} /> },
];

export const ChangeLanguage = () => {
  const t = useTranslations('StartPhotoAddingScreen');
  const { locale, setLocale } = useLocale();
  const [isChange, setIsChange] = useState(false);

  const changeLanguage = (newLocale: string) => {
    setLocale(newLocale as 'en' | 'ru' | 'fr');
    setIsChange(false);
  };

  return (
    <>
      {isChange && (
        <Overlay handleOverlayClick={() => setIsChange(prev => !prev)} />
      )}
      {isChange && (
        <div className={styles.langButtonsWrapper}>
          {LANGUAGES.map(l => (
            // <Link key={l.code} href={pathname} locale={l.code}>{l.title}</Link>
            <LangButton
              icon={l.icon}
              title={l.code}
              key={l.code}
              isCurrent={locale === l.code}
              onClick={() => changeLanguage(l.code)}
            />
          ))}
        </div>
      )}
      <Button
        variant={'secondary'}
        size={'sm'}
        onClick={() => {
          console.log('change language');
          setIsChange(prev => !prev);
        }}
        className={styles.button}
      >
        {t('bottomButtons.changeLang')}
      </Button>
    </>
  );
};
