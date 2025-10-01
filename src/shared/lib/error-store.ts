import { create } from 'zustand';

export interface ErrorData {
  status: number;
  message: string;
  description?: string;
}

interface ErrorStore {
  errorData: ErrorData | null;
  setErrorData: (error: ErrorData) => void;
  clearErrorData: () => void;
}

export const useErrorStore = create<ErrorStore>(set => ({
  errorData: null,
  setErrorData: (error: ErrorData) => {
    const err: ErrorData = {
      status: error.status,
      message: error.message,
      description: '',
    };
    switch (error.status) {
      case 400: {
        err.message = 'Неверный формат файла';
        err.description =
          'Формат/размер фотографии не соответствует требованиям системы';
        break;
      }
      case 413: {
        err.message = 'Слишком большой файл';
        err.description =
          'Формат/размер фотографии не соответствует требованиям системы';
        break;
      }
      case 410: {
        err.message = 'сессия истекла';
        err.description = 'сессия истекла';
        break;
      }
      case 409: {
        err.message = 'QR уже занят другим телефоном';
        err.description = 'QR уже занят другим телефоном';
        break;
      }
      case 500: {
        err.message = 'ошибка сервера (показать «повторите попытку»)';
        err.description = 'ошибка сервера (показать «повторите попытку»)';
        break;
      }
    }
    set({ errorData: err });
  },
  clearErrorData: () => set({ errorData: null }),
}));
