import SadFace from '@/shared/assets/sadFace';
import { useTranslations } from '@/shared/lib';
import { Button, CornerBox } from '@/shared/ui';

import styles from './error-mobile-screen.module.scss';

interface Props {
  uploadIsError: boolean;
  uploadingIsError: boolean;
  buttonClick: () => void;
}

export const ErrorMobileScreen = ({
  uploadIsError,
  uploadingIsError,
  buttonClick,
}: Props) => {
  const t = useTranslations('MobileScreen');

  return (
    <div className={styles.container}>
      <div className={styles.cornerBoxWrapper}>
        <CornerBox>
          <div className={styles.errorBox}>
            <SadFace />
            <span className={styles.title}>{t('errorMobile.title')}</span>
          </div>
          <span className={styles.subTitle}>
            {uploadIsError && t('errorMobile.uploadError')}
            {uploadingIsError && t('errorMobile.uploadingIsError')}
          </span>
        </CornerBox>
      </div>
      {uploadingIsError && (
        <Button onClick={buttonClick} className={styles.downloadBtn}>
          {t('errorMobile.uploadingIsErrorButton')}
        </Button>
      )}
      {uploadIsError && (
        <Button className={styles.downloadBtn}>
          {t('errorMobile.uploadErrorButton')}
        </Button>
      )}
    </div>
  );
};
