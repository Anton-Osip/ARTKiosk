import { StaticImageData } from 'next/image';
import { create } from 'zustand';

import mock1 from '../../../public/mock/mock1.png';
import mock2 from '../../../public/mock/mock2.png';
import mock3 from '../../../public/mock/mock3.png';
import mock4 from '../../../public/mock/mock4.png';
import mock5 from '../../../public/mock/mock5.png';
import mock6 from '../../../public/mock/mock6.png';

interface GenerateData {
  id: string;
  img: StaticImageData;
}
type MethodPay = 'applePay' | 'googlePay' | 'card' | 'cash';

interface GenerateStore {
  generateData: GenerateData[];
  generationCounter: number;
  timer: number;
  isGenerated: boolean;
  isPaid: boolean;
  codeEntryTimeLimit: number;
  interval: NodeJS.Timeout | null;
  startCodeEntryCountdown: () => void;
  makeAPayment: (method: MethodPay) => void;
  generatedThumbnail: () => void;
  clearCodeEntryCountdown: () => void;
  replaceThumbnail: (id: string, img: StaticImageData) => void;
}

export const useGenerateStore = create<GenerateStore>((set, get) => ({
  generateData: [],
  generationCounter: 1,
  timer: 0,
  isGenerated: false,
  isPaid: false,
  codeEntryTimeLimit: 5,
  interval: null,

  generatedThumbnail: () => {
    if (get().generationCounter <= 0) return;
    set({ timer: 0, isGenerated: true });
    let time = 0;
    const interval = setInterval(() => {
      time = +(time + 0.01).toFixed(2);
      set({ timer: time });

      if (time >= 3) {
        clearInterval(interval);
      }
    }, 10);

    const promise = new Promise<{
      data: GenerateData[];
    }>(res => {
      const data = [mock1, mock2, mock3, mock4, mock5, mock6];

      const getRandomElements = (array: StaticImageData[], count: number) => {
        const shuffled = [...array].sort(() => 0.5 - Math.random());

        return shuffled.slice(0, count);
      };

      const resData: GenerateData[] = getRandomElements(data, 4).map(
        (el, index) => {
          return {
            id: `${Date.now()}-${index}-${Math.random().toString(36).substr(2, 9)}`,
            img: el,
          };
        }
      );

      setTimeout(() => {
        res({
          data: resData,
        });
      }, 3000);
    });

    promise.then(data => {
      set(state => ({
        timer: 0,
        isGenerated: false,
        generateData: [...state.generateData, ...data.data],
        generationCounter: state.generationCounter - 1,
      }));
    });
  },
  makeAPayment: (method: MethodPay) => {
    set({ timer: 0 });
    switch (method) {
      case 'cash': {
        set(state => ({
          timer: 0,
          generationCounter: state.generationCounter + 5,
        }));
        break;
      }
    }
  },
  clearCodeEntryCountdown: () => {
    const currentInterval = get().interval;
    if (currentInterval) clearInterval(currentInterval);
    set({ interval: null, codeEntryTimeLimit: 0 });
  },
  startCodeEntryCountdown: () => {
    const currentInterval = get().interval;
    if (currentInterval) {
      clearInterval(currentInterval);
    }

    set({ codeEntryTimeLimit: 5 });

    const interval = setInterval(() => {
      const currentTime = get().codeEntryTimeLimit;
      if (currentTime <= 1) {
        clearInterval(interval);
        set({ interval: null, codeEntryTimeLimit: 0 });
      } else {
        set({ codeEntryTimeLimit: currentTime - 1 });
      }
    }, 1000);

    set({ interval });
  },
  replaceThumbnail: (id: string, img: StaticImageData) => {
    set(state => ({
      generateData: state.generateData.map(item =>
        item.id === id ? { ...item, img } : item
      ),
    }));
  },
}));
