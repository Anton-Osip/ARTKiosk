'use client';

import { useCallback, useState } from 'react';

export const useVirtualKeyboard = (initialValue = '') => {
  const [value, setValue] = useState(initialValue);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  const openKeyboard = () => setIsKeyboardOpen(true);
  const closeKeyboard = () => setIsKeyboardOpen(false);

  const handleKeyPress = useCallback((key: string) => {
    if (key === 'backspace') {
      setValue(prev => prev.slice(0, -1));

      return;
    }
    if (key === 'space') {
      setValue(prev => `${prev} `);

      return;
    }
    if (key === 'clear') {
      setValue('');

      return;
    }
    if (key === 'done') {
      closeKeyboard();

      return;
    }
    setValue(prev => `${prev}${key}`);
  }, []);

  return {
    value,
    setValue,
    isKeyboardOpen,
    openKeyboard,
    closeKeyboard,
    handleKeyPress,
  };
};
