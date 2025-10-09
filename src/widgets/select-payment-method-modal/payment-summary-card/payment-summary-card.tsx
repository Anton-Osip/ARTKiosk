import { useTranslations } from '@/shared/lib';

import styles from './payment-summary-card.module.scss';

interface Props {
  amount?: string;
  designsCount?: number;
}

export const PaymentSummaryCard = ({
  amount = '3,00',
  designsCount = 20,
}: Props) => {
  const t = useTranslations('PaymentModal.paymentSummary');

  return (
    <div className={styles.card}>
      <div className={styles.headerRow}>
        <span className={styles.label}>{t('amountLabel')}</span>
        <span className={styles.amount}>
          <span className={styles.symbol}>{t('currencySymbol')}</span>
          {amount}
        </span>
      </div>

      <div className={styles.body}>
        <div className={styles.value}>{designsCount}</div>
        <div className={styles.caption}>{t('designs')}</div>
      </div>
    </div>
  );
};
