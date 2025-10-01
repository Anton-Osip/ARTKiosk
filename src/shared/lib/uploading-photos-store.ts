import { create } from 'zustand';

interface UploadingPhotosStore {
  image: string | null;
  isLoading: boolean;
  uploadingError: string | null;
  setImage: (file: File) => void;
  setUploadingError: (error: Error | string | null) => void;
}

export const useUploadingPhotosStore = create<UploadingPhotosStore>(set => ({
  image: null,
  isLoading: false,
  uploadingError: null,

  setUploadingError: (error: Error | string | null) => {
    const errorValue = error instanceof Error ? error.message : error;
    set({ uploadingError: errorValue });
  },

  setImage: (file: File): void => {
    const validationError = validateFile(file);
    if (validationError) {
      set({ uploadingError: validationError });

      return;
    }

    set({ uploadingError: null });
    const imageUrl = URL.createObjectURL(file);
    set({ image: imageUrl });
  },
}));

const validateFile = (file: File): string | null => {
  const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
  if (!allowedTypes.includes(file.type)) {
    return 'Разрешены только файлы JPG, PNG и WebP';
  }

  const maxSize = 5 * 1024 * 1024; // 5 MB
  if (file.size > maxSize) {
    return 'Размер файла не должен превышать 5 MB';
  }

  const fileExtension = file.name.split('.').pop()?.toLowerCase();
  const allowedExtensions = ['jpg', 'jpeg', 'png', 'webp'];
  if (!fileExtension || !allowedExtensions.includes(fileExtension)) {
    return 'Недопустимое расширение файла';
  }

  return null;
};
