import {
  BaseResponse,
  CommitRequest,
  CommitResponse,
  instance,
  PresignResponse,
} from '@/shared/api';

export const uploadAPI = {
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
