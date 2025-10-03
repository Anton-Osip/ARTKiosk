'use client';

import { createContext, ReactNode, useContext, useEffect } from 'react';

import enMessages from '../../../messages/en.json';
import ruMessages from '../../../messages/ru.json';
import { Locale, useLocaleStore } from './locale-store';

const messages = {
  en: enMessages,
  ru: ruMessages,
  fr: enMessages, // temp
};

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

interface LocaleProviderProps {
  children: ReactNode;
}

export function LocaleProvider({ children }: LocaleProviderProps) {
  const {
    locale,
    setLocale,
    messages: storeMessages,
    setMessages,
  } = useLocaleStore();

  useEffect(() => {
    setMessages(messages[locale]);
  }, [locale, setMessages]);

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: unknown = storeMessages;

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return key;
      }
    }

    return typeof value === 'string' ? value : key;
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }

  return context;
}

export function useTranslations(namespace?: string) {
  const { t } = useLocale();

  return (key: string) => {
    const fullKey = namespace ? `${namespace}.${key}` : key;

    return t(fullKey);
  };
}
