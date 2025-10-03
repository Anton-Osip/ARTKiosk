import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Locale = 'en' | 'ru' | 'fr';

export interface LocaleStore {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  messages: Record<string, unknown>;
  setMessages: (messages: Record<string, unknown>) => void;
}

export const useLocaleStore = create<LocaleStore>()(
  persist(
    set => ({
      locale: 'ru',
      messages: {},
      setLocale: locale => set({ locale }),
      setMessages: messages => set({ messages }),
    }),
    {
      name: 'locale-storage',
      partialize: state => ({ locale: state.locale }),
    }
  )
);
