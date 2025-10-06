import Apple from '@/shared/assets/apple';
import Cash from '@/shared/assets/cash';
import CreditCard from '@/shared/assets/creditCard';
import Pay from '@/shared/assets/pay';
import { Button } from '@/shared/ui';

import styles from './payment-methods.module.scss';

interface Props {
  onSelect?: (method: 'applePay' | 'gPay' | 'card' | 'cash') => void;
  showPayWithCashHandler: () => void;
  setShowPayWithCardHandler: () => void;
}

export const PaymentMethods = ({
  onSelect,
  showPayWithCashHandler,
  setShowPayWithCardHandler,
}: Props) => {
  return (
    <div className={styles.methods}>
      <div className={styles.title}>Выбери способ оплаты</div>

      <div className={styles.grid}>
        <Button
          type="button"
          className={styles.method}
          onClick={() => onSelect?.('applePay')}
        >
          <Apple /> Pay
        </Button>

        <Button
          type="button"
          className={styles.method}
          onClick={() => onSelect?.('gPay')}
        >
          <Pay /> Pay
        </Button>

        <Button
          type="button"
          className={styles.method}
          onClick={setShowPayWithCardHandler}
        >
          <CreditCard />
          Credit Card
        </Button>

        <Button
          type="button"
          className={styles.method}
          onClick={showPayWithCashHandler}
        >
          <Cash /> Cash / Code
        </Button>
      </div>
    </div>
  );
};
