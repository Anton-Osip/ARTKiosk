import { create } from 'zustand';

import { sessionAPI, SessionStatusResponse } from '@/shared/api';
import { useErrorStore } from '@/shared/lib';

export interface SessionStatusError {
  status: number;
  message: string;
}

interface ApiError extends Error {
  status: number;
}

interface AxiosErrorResponse {
  status: number;
  data: {
    error?: string;
  };
}

interface AxiosError extends Error {
  response?: AxiosErrorResponse;
}

interface SessionStore {
  sessionStatusData: SessionStatusResponse | null;
  isLoading: boolean;
  error: SessionStatusError | null;
  fetchSessionStatus: (sessionId: string | undefined) => Promise<void>;
}

export const useSessionStatusStore = create<SessionStore>(set => ({
  sessionStatusData: null,
  isLoading: false,
  error: null,

  fetchSessionStatus: async (sessionId: string | undefined) => {
    try {
      set({ isLoading: true, error: null });
      if (sessionId) {
        const response = await sessionAPI.getSessionStatus(sessionId);
        set({ sessionStatusData: response.data.data });
      }
    } catch (err: unknown) {
      if (err && typeof err === 'object' && 'response' in err) {
        const axiosError = err as AxiosError;
        useErrorStore.getState().setErrorData({
          status: axiosError.response?.status || 500,
          message:
            axiosError.response?.data?.error ||
            axiosError.message ||
            'Failed to fetch session status',
          description: `Session status error: ${axiosError.response?.data?.error || axiosError.message || 'Unknown error'}`,
        });
      } else {
        const apiError = err as ApiError;
        useErrorStore.getState().setErrorData({
          status: apiError?.status || 500,
          message: apiError?.message || 'Failed to fetch session status',
          description: `Session status error: ${apiError?.message || 'Unknown error'}`,
        });
      }
    } finally {
      set({ isLoading: false });
    }
  },
}));
