import styles from './payment-summary-card.module.scss';

interface Props {
  amount?: string;
  designsCount?: number;
}

export const PaymentSummaryCard = ({
  amount = '3,00',
  designsCount = 20,
}: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.headerRow}>
        <span className={styles.label}>К оплате:</span>
        <span className={styles.amount}>
          <span className={styles.symbol}>$</span>
          {amount}
        </span>
      </div>

      <div className={styles.body}>
        <div className={styles.value}>{designsCount}</div>
        <div className={styles.caption}>дизайнов</div>
      </div>
    </div>
  );
};
