export interface ClaimRequest {
  qr_token: string;
  device_fp: string;
}

export interface ClaimResponse {
  session_id: string;
  status: 'pending' | 'uploaded' | 'expired';
}

export interface PresignResponse {
  objectKey: string;
  upload: {
    url: string;
    headers: { 'Content-Type': string };
  };
  maxBytes: number;
  allowedMime: string[];
}

export interface CommitRequest {
  session_id: string;
  objectKey: string;
  size: number;
  mime: string;
}

export interface CommitResponse {
  ok: boolean;
}
