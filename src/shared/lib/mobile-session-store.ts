import { create } from 'zustand';

import { ClaimRequest, ClaimResponse, sessionAPI } from '@/shared/api';

export interface MobileSessionError {
  status: number;
  message: string;
}

interface MobileSessionStore {
  sessionData: ClaimResponse | null;
  isLoading: boolean;
  error: MobileSessionError | null;
  qrToken: string | null;
  deviceFp: string;

  setQrToken: (token: string) => void;
  claimSession: () => Promise<void>;
  clearError: () => void;
  reset: () => void;
}

const generateDeviceFp = (): string => {
  if (typeof window === 'undefined') {
    return `device-server-${Date.now()}`;
  }

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  ctx?.fillText('device-fp', 10, 10);

  const fingerprint = [
    navigator.userAgent,
    navigator.language,
    `${screen.width}x${screen.height}`,
    new Date().getTimezoneOffset(),
    canvas.toDataURL(),
  ].join('|');

  let hash = 0;
  for (let i = 0; i < fingerprint.length; i++) {
    const char = fingerprint.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }

  return `device-${Math.abs(hash).toString(36)}`;
};

export const useMobileSessionStore = create<MobileSessionStore>((set, get) => ({
  sessionData: null,
  isLoading: false,
  error: null,
  qrToken: null,
  deviceFp: '',

  setQrToken: (token: string) => {
    set({ qrToken: token });
  },

  claimSession: async () => {
    const { qrToken, deviceFp } = get();

    if (!qrToken) {
      set({
        error: {
          status: 400,
          message: 'QR token not found',
        },
      });

      return;
    }

    const currentDeviceFp = deviceFp || generateDeviceFp();
    if (!deviceFp) {
      set({ deviceFp: currentDeviceFp });
    }

    try {
      set({ isLoading: true, error: null });

      const request: ClaimRequest = {
        qr_token: qrToken,
        device_fp: currentDeviceFp,
      };

      const response = await sessionAPI.claimSession(request);
      set({ sessionData: response.data.data });
    } catch (err: unknown) {
      console.log(err);
    } finally {
      set({ isLoading: false });
    }
  },

  clearError: () => {
    set({ error: null });
  },

  reset: () => {
    set({
      sessionData: null,
      isLoading: false,
      error: null,
      qrToken: null,
    });
  },
}));
