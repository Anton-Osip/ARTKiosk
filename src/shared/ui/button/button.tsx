'use client';

import { cva, VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';
import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

import styles from './button.module.scss';

const buttonVariants = cva(styles.button, {
  variants: {
    variant: {
      primary: styles.primary,
      secondary: styles.secondary,
      light: styles.light,
      ghost: styles.ghost,
      close: styles.close,
    },
    size: {
      sm: styles.sm,
      md: styles.md,
      lg: styles.lg,
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T;
  variant?: 'link' | 'primary' | 'secondary' | 'light' | 'ghost' | 'close';
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
} & ComponentPropsWithoutRef<T> &
  VariantProps<typeof buttonVariants>;

export const Button = <T extends ElementType = 'button'>(
  props: ButtonProps<T>
) => {
  const {
    as: Component = 'button',
    className,
    variant = 'primary',
    children,
    iconPosition,
    icon,
    size,
    ...rest
  } = props;

  return (
    <Component
      className={clsx(
        styles.button,
        buttonVariants({ variant, size }),
        icon && styles.iconButton,
        icon && iconPosition === 'left' && styles.left,
        icon && iconPosition === 'right' && styles.right,
        className,
        rest.disabled && styles.disabled
      )}
      {...rest}
    >
      {icon && (iconPosition === 'left' || !iconPosition) && (
        <span className={styles.icon}>{icon}</span>
      )}
      {children && children}
      {icon && iconPosition === 'right' && (
        <span className={styles.icon}>{icon}</span>
      )}
    </Component>
  );
};
