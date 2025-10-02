import { create } from 'zustand';

import { InitSessionResponse, sessionAPI } from '@/shared/api';
import { Locale } from '@/shared/lib';

export interface SessionError {
  status: number;
  message: string;
}

interface ApiError extends Error {
  status: number;
}

interface SessionStore {
  sessionData: InitSessionResponse | null;
  isLoading: boolean;
  error: SessionError | null;
  fetchSessionData: (locale: Locale) => Promise<void>;
}

export const useSessionStore = create<SessionStore>(set => ({
  sessionData: null,
  isLoading: false,
  error: null,

  fetchSessionData: async (locale: Locale) => {
    try {
      set({ isLoading: true, error: null });

      const response = await sessionAPI.initSession({
        lang: locale,
        ttlSec: 600, // 10 минут
        kioskId: 'K-01',
      });
      console.log(response.data.data.qr_url);
      set({ sessionData: response.data.data });
    } catch (err: unknown) {
      const apiError = err as ApiError;
      set({
        error: {
          status: apiError?.status || 500,
          message: apiError?.message || 'Failed to initialize session',
        },
      });
    } finally {
      set({ isLoading: false });
    }
  },
}));
