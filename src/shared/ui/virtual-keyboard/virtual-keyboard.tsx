'use client';

import { MouseEvent, useCallback, useMemo } from 'react';

import styles from './virtual-keyboard.module.scss';

interface VirtualKeyboardProps {
  isOpen: boolean;
  onClose: () => void;
  onKeyPress: (key: string) => void;
}

export const VirtualKeyboard = ({
  isOpen,
  onClose,
  onKeyPress,
}: VirtualKeyboardProps) => {
  const rows = useMemo(
    () => [
      ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
      ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
      ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
      ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
    ],
    []
  );

  const handleKeyPress = useCallback(
    (key: string) => {
      onKeyPress(key);
    },
    [onKeyPress]
  );

  const stopOverlayPropagation = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  if (!isOpen) return null;

  return (
    <div className={styles.keyboardOverlay} onClick={onClose}>
      <div className={styles.keyboardPanel} onClick={stopOverlayPropagation}>
        {rows.map((row, idx) => (
          <div key={idx} className={styles.keyboardRow}>
            {row.map(k => (
              <button
                key={k}
                type="button"
                className={styles.key}
                onClick={() => handleKeyPress(k)}
              >
                {k.toUpperCase()}
              </button>
            ))}
            {idx === rows.length - 1 && (
              <button
                type="button"
                className={`${styles.key} ${styles.keyWide}`}
                onClick={() => handleKeyPress('backspace')}
              >
                ⌫
              </button>
            )}
          </div>
        ))}
        <div className={styles.keyboardRow}>
          <button
            type="button"
            className={`${styles.key} ${styles.keyWide}`}
            onClick={() => handleKeyPress('space')}
          >
            Space
          </button>
          <button
            type="button"
            className={`${styles.key} ${styles.keyMedium}`}
            onClick={() => handleKeyPress('clear')}
          >
            Clear
          </button>
          <button
            type="button"
            className={`${styles.key} ${styles.keyAccent}`}
            onClick={() => handleKeyPress('done')}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
