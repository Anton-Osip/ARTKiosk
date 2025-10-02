import { ReactNode } from 'react';

import styles from './select-block.module.scss';
import { Variant } from './types';

type Props<T> = {
  title: string;
  icon?: ReactNode;
  variantList: Variant<T>[];
  selectedVariant?: string | null;
  setSelectedVariant: (value: T) => void;
};

export const SelectBlock = <T extends string>({
  selectedVariant,
  variantList,
  title,
  icon,
  setSelectedVariant,
}: Props<T>) => {
  return (
    <div className={styles.section}>
      <div className={styles.sectionHeader}>
        {icon}
        <h3 className={styles.sectionTitle}>{title}</h3>
      </div>
      <div className={styles.buttonsWrapper}>
        {variantList.map(variant => (
          <button
            key={variant.value}
            className={`${styles.button} ${selectedVariant === variant.value ? styles.selected : ''}`}
            onClick={() => setSelectedVariant(variant.value)}
          >
            {variant.title}
          </button>
        ))}
      </div>
    </div>
  );
};
