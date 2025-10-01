import { useModalStore } from '@/shared';

export const useTakePhoto = () => {
  const { openModal } = useModalStore();
  const handlePhotoCapture = (imageData: string) => {
    console.log('Photo captured:', imageData);
  };

  return () => {
    openModal({
      type: 'camera-preview',
      onCapture: handlePhotoCapture,
    });
  };
};