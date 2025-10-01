import { create } from 'zustand';

import { uploadAPI } from '@/shared/api/upload/upload-api';
import { CommitRequest } from '@/shared/api/upload/upload-api.types';

export interface UploadError {
  status: number;
  message: string;
}

interface UploadStore {
  isUploading: boolean;
  isCommit: boolean;
  isError: boolean;
  uploadFile: (file: File, sessionId: string) => Promise<void>;
  clearError: () => void;
}

export const useUploadStore = create<UploadStore>(set => ({
  isCommit: false,
  isUploading: false,
  isError: false,

  uploadFile: async (file: File, sessionId: string) => {
    try {
      set({ isUploading: true, isError: false });

      // 1. Получаем presign URL
      const featchPresignData = await uploadAPI.getPresignUrl(sessionId);
      const presignData = featchPresignData.data.data;
      // 2. Проверяем размер файла
      if (file.size > presignData.maxBytes) {
        set({ isError: true });
        throw new Error(
          `Файл слишком большой. Максимальный размер: ${presignData.maxBytes} байт`
        );
      }

      // 3. Проверяем MIME тип
      if (!presignData.allowedMime.includes(file.type)) {
        set({ isError: true });
        throw new Error(
          `Неподдерживаемый формат файла. Разрешены: ${presignData.allowedMime.join(', ')}`
        );
      }

      // 4. Загружаем файл на presign URL
      const uploadResponse = await fetch(presignData.upload.url, {
        method: 'PUT',
        headers: presignData.upload.headers,
        body: file,
      });
      if (!uploadResponse.ok) {
        set({ isError: true });
        throw new Error(`Ошибка загрузки файла: ${uploadResponse.status}`);
      }

      const commitRequest: CommitRequest = {
        session_id: sessionId,
        objectKey: presignData.objectKey,
        size: file.size,
        mime: file.type,
      };

      await uploadAPI.commitUpload(commitRequest);
      set({ isCommit: true });
    } catch (err: unknown) {
      set({ isError: true });
      console.log(err);
    } finally {
      set({ isUploading: false });
    }
  },

  clearError: () => {
    set({ isError: false });
  },
}));
