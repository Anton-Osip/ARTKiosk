'use client';

import { ReactNode } from 'react';

import styles from './icon-container.module.scss';

interface IconContainerProps {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'surface' | 'accent';
  className?: string;
}

export function IconContainer({
  children,
  size = 'md',
  variant = 'default',
  className,
}: IconContainerProps) {
  return (
    <div
      className={`${styles.container} ${styles[size]} ${styles[variant]} ${className || ''}`}
    >
      {children}
    </div>
  );
}
