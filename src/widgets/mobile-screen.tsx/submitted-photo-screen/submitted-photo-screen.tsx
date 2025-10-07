import Image from 'next/image';

import { WarningRound } from '@/shared/assets';
import { useTranslations } from '@/shared/lib';
import { Button, InstructionPanel } from '@/shared/ui';

import styles from './submitted-photo-screen.module.scss';

interface Props {
  image: string;
  closeWindow: () => void;
}

export const SubmittedPhotoScreen = ({ image, closeWindow }: Props) => {
  const t = useTranslations('MobileScreen');

  return (
    <>
      <div className={styles.photoContainer}>
        <Image
          src={image}
          alt="download image"
          className={styles.photo}
          width={298}
          height={395}
          style={{ objectFit: 'cover' }}
        />
      </div>
      <InstructionPanel
        className={styles.instructionPanel}
        icon={<WarningRound width={24} height={24} />}
        text={
          <span className={styles.instructionText}>
            {t('common.instruction')}
          </span>
        }
      />
      <Button onClick={closeWindow} className={styles.sentPhoto}>
        {t('submittedPhoto.sentButton')}
      </Button>
    </>
  );
};
