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
