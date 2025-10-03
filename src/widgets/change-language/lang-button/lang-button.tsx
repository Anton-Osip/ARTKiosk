import { clsx } from 'clsx';
import { ComponentPropsWithoutRef, ReactNode } from 'react';

import styles from './lang-button.module.scss';

type Props = {
  icon: ReactNode;
  isCurrent: boolean;
} & ComponentPropsWithoutRef<'button'>;

export const LangButton = ({ icon, title, isCurrent, ...rest }: Props) => {
  return (
    <button
      className={clsx(styles.button, isCurrent && styles.active)}
      {...rest}
    >
      {icon} {title}
    </button>
  );
};
