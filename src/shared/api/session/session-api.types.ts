type SessionStatus = 'pending' | 'uploaded' | 'expired';

export interface SessionStatusResponse {
  status: SessionStatus;
  expiresAt?: number;
  photo?: {
    objectKey: string;
    previewUrl: string;
  };
}

export interface InitSessionResponse {
  session_id: string;
  qr_token: string;
  qr_url: string;
  expiresAt: number;
}

export interface InitSessionRequest {
  lang: string;
  ttlSec: number;
  kioskId: string;
}

export interface ClaimResponse {
  session_id: string;
  status: 'pending' | 'uploaded' | 'expired';
}

export interface ClaimRequest {
  qr_token: string;
  device_fp: string;
}
