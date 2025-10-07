import { clsx } from 'clsx';
import { StaticImageData } from 'next/image';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { RefreshArrow, Star } from '@/shared/assets';
import { Button } from '@/shared/ui';

import styles from './result-thumbnail.module.scss';

interface Props {
  item: {
    id: string;
    img: StaticImageData;
  };
}

const elements = [
  'first',
  'third',
  'second',
  'fourth',
  'third',
  'second',
  'third',
  'fourth',
  'first',
  'third',
  'fourth',
  'second',
];

export const ResultThumbnail = ({ item }: Props) => {
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

  return (
    <div className={styles.container}>
      <Image src={item.img} alt={'image'} className={styles.image} />
      <Button className={styles.refreshButton} variant={'close'}>
        <RefreshArrow />
        <div className={clsx(styles.blinkSection, styles[active])}>
          <Star className={clsx(styles.star, styles.star1)} />
          <Star className={clsx(styles.star, styles.star2)} />
          <Star className={clsx(styles.star, styles.star3)} />
          <Star className={clsx(styles.star, styles.star4)} />
        </div>
      </Button>
    </div>
  );
};
