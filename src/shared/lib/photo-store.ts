import { create } from 'zustand';

export type Gender = 'male' | 'female';
export type AgeGroup = 'child' | 'teen' | 'young' | 'adult' | 'mature';

interface PhotoStore {
  capturedPhoto: string | null;
  gender: Gender | null;
  ageGroup: AgeGroup | null;
  setCapturedPhoto: (photo: string) => void;
  setGender: (gender: Gender) => void;
  setAgeGroup: (ageGroup: AgeGroup) => void;
  clearCapturedPhoto: () => void;
  clearPhotoData: () => void;
}

export const usePhotoStore = create<PhotoStore>(set => ({
  capturedPhoto: null,
  gender: 'male',
  ageGroup: null,

  setCapturedPhoto: (photo: string) => {
    try {
      console.log(
        'Setting captured photo:',
        photo ? 'Photo data present' : 'No photo data'
      );
      set({ capturedPhoto: photo });
    } catch (error) {
      console.error('Error setting captured photo:', error);
    }
  },

  setGender: (gender: Gender) => {
    try {
      console.log('Setting gender:', gender);
      set({ gender });
    } catch (error) {
      console.error('Error setting gender:', error);
    }
  },

  setAgeGroup: (ageGroup: AgeGroup) => {
    try {
      console.log('Setting age group:', ageGroup);
      set({ ageGroup });
    } catch (error) {
      console.error('Error setting age group:', error);
    }
  },

  clearCapturedPhoto: () => {
    try {
      console.log('Clearing captured photo');
      set({ capturedPhoto: null });
    } catch (error) {
      console.error('Error clearing captured photo:', error);
    }
  },

  clearPhotoData: () => {
    try {
      console.log('Clearing all photo data');
      set({ capturedPhoto: null, gender: null, ageGroup: null });
    } catch (error) {
      console.error('Error clearing photo data:', error);
    }
  },
}));
