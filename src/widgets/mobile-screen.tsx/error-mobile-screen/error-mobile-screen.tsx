import { Button, CornerBox } from '@/shared';
import SadFace from '@/shared/assets/sadFace';

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
  return (
    <div className={styles.container}>
      <CornerBox>
        <div className={styles.errorBox}>
          <SadFace />
          <span className={styles.title}>Упс...</span>
        </div>
        <span className={styles.subTitle}>
          {uploadIsError && 'Произошёл сбой'}
          {uploadingIsError && 'Фото не соответствует требованиям системы'}
        </span>
      </CornerBox>
      {uploadingIsError && (
        <Button onClick={buttonClick} className={styles.downloadBtn}>
          Заменить фото
        </Button>
      )}
      {uploadIsError && (
        <Button className={styles.downloadBtn}>Повторить попытку</Button>
      )}
    </div>
  );
};
