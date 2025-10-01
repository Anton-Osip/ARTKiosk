import { BaseResponse } from '@/shared/api/base-api.type';
import { instance } from '@/shared/api/instance';
import {
  ClaimRequest,
  ClaimResponse,
  CommitRequest,
  CommitResponse,
  PresignResponse,
} from '@/shared/api/upload/upload-api.types';

export const uploadAPI = {
  claimSession(request: ClaimRequest) {
    return instance.post<BaseResponse<ClaimResponse>>('session/claim', request);
  },
  getPresignUrl(session_id: string) {
    return instance.get<BaseResponse<PresignResponse>>(
      `upload/presign?session_id=${session_id}`
    );
  },
  commitUpload(request: CommitRequest) {
    return instance.post<BaseResponse<CommitResponse>>(
      'upload/commit',
      request
    );
  },
};
