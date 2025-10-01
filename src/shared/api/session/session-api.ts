import { BaseResponse } from '@/shared/api/base-api.type';
import { instance } from '@/shared/api/instance';
import {
  ClaimRequest,
  ClaimResponse,
  InitSessionRequest,
  InitSessionResponse,
  SessionStatusResponse,
} from '@/shared/api/session/session-api.types';

export const sessionAPI = {
  getSessionStatus(sessionId: string) {
    return instance.get<BaseResponse<SessionStatusResponse>>(
      `session/status?session_id=${sessionId}`
    );
  },

  initSession(request: InitSessionRequest) {
    return instance.post<BaseResponse<InitSessionResponse>>(
      'session/init',
      request
    );
  },

  claimSession(request: ClaimRequest) {
    return instance.post<BaseResponse<ClaimResponse>>('session/claim', request);
  },
};
