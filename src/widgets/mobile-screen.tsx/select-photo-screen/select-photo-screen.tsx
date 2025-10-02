import Download from '@/shared/assets/download';
import PhotoCamera from '@/shared/assets/photoCamera';
import Warning from '@/shared/assets/warningRound';
import { useTranslations } from '@/shared/lib';
import { Button, CornerBox, InstructionPanel } from '@/shared/ui';

import styles from './select-photo-screen.module.scss';

interface Props {
  buttonClick: () => void;
}

export const SelectPhotoScreen = ({ buttonClick }: Props) => {
  const t = useTranslations('MobileScreen');

  return (
    <>
      <CornerBox onClick={buttonClick}>
        <PhotoCamera />
        <h2 className={styles.title}>{t('selectPhoto.title')}</h2>
        <span className={styles.subTitle}>{t('selectPhoto.subtitle')}</span>
      </CornerBox>
      <InstructionPanel
        className={styles.instructionPanel}
        icon={<Warning width={24} height={24} />}
        text={
          <span className={styles.instructionText}>
            {t('common.instruction')}
          </span>
        }
      />
      <Button
        className={styles.downloadBtn}
        icon={<Download />}
        onClick={buttonClick}
      >
        {t('selectPhoto.uploadButton')}
      </Button>
    </>
  );
};
