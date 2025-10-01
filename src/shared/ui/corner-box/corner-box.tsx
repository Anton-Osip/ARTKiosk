import { clsx } from 'clsx';
import { ReactNode } from 'react';

import styles from './corner-box.module.scss';

interface Props {
  children?: ReactNode;
  className?: string;
  containerClassName?: string;
  onClick?: () => void;
}

export const CornerBox = ({
  children,
  className,
  containerClassName,
  onClick,
}: Props) => {
  const onClickHandler = () => {
    if (onClick) onClick();
  };

  return (
    <div
      onClick={onClickHandler}
      className={clsx(styles.cornerBox, className ?? className)}
    >
      <div className={styles.cornerTopLeft}></div>
      <div className={styles.cornerTopRight}></div>
      <div className={styles.cornerBottomLeft}></div>
      <div className={styles.cornerBottomRight}></div>
      <div
        className={clsx(
          styles.cornerContainer,
          containerClassName ?? containerClassName
        )}
      >
        {children}
      </div>
    </div>
  );
};
