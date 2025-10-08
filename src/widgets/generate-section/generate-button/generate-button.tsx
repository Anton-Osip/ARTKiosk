import { clsx } from 'clsx';
import { useEffect, useState } from 'react';

import { Star } from '@/shared/assets';

import styles from './generate-button.module.scss';

interface Props {
  onClick?: () => void;
  disabled?: boolean;
}

const elements = ['first', 'second', 'third', 'second', 'third', 'second'];

export const GenerateButton = ({ onClick, disabled }: Props) => {
  const [active, setActive] = useState('first');
  useEffect(() => {
    let currentIndex = 0;
    setActive(elements[currentIndex]);

    const intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % elements.length;
      setActive(elements[currentIndex]);
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const onClickHandler = () => {
    onClick?.();
  };

  return (
    <button
      className={clsx(styles.generateButton, disabled && styles.disabledBtn)}
      onClick={onClickHandler}
    >
      <span>Generate</span>
      <div className={clsx(styles.blinkSection, styles[active])}>
        <Star className={clsx(styles.star, styles.star1)} />
        <Star className={clsx(styles.star, styles.star2)} />
        <Star className={clsx(styles.star, styles.star3)} />
      </div>
    </button>
  );
};
