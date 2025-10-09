import { Apple, Cash, CreditCard, Pay } from '@/shared/assets';
import { useTranslations } from '@/shared/lib';
import { Button } from '@/shared/ui';

import styles from './payment-methods.module.scss';

interface Props {
  showPayWithCashHandler: () => void;
  setShowPayWithCardHandler: () => void;
}

export const PaymentMethods = ({
  showPayWithCashHandler,
  setShowPayWithCardHandler,
}: Props) => {
  const t = useTranslations('PaymentModal.paymentMethods');

  return (
    <div className={styles.methods}>
      <div className={styles.title}>{t('title')}</div>

      <div className={styles.grid}>
        <Button
          type="button"
          className={styles.method}
          onClick={setShowPayWithCardHandler}
        >
          <Apple /> {t('applePay')}
        </Button>

        <Button
          type="button"
          className={styles.method}
          onClick={setShowPayWithCardHandler}
        >
          <Pay /> {t('googlePay')}
        </Button>

        <Button
          type="button"
          className={styles.method}
          onClick={setShowPayWithCardHandler}
        >
          <CreditCard />
          {t('creditCard')}
        </Button>

        <Button
          type="button"
          className={styles.method}
          onClick={showPayWithCashHandler}
        >
          <Cash /> {t('cashCode')}
        </Button>
      </div>
    </div>
  );
};
