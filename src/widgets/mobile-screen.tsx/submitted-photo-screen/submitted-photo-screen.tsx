import Image from 'next/image';

import { Button, InstructionPanel } from '@/shared';
import Warning from '@/shared/assets/warningRound';

import styles from './submitted-photo-screen.module.scss';

interface Props {
  image: string;
  closeWindow: () => void;
}

export const SubmittedPhotoScreen = ({ image, closeWindow }: Props) => {
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
        icon={<Warning width={24} height={24} />}
        text={
          <span className={styles.instructionText}>
            На фото должен быть только один человек.Убедитесь что селфи удачное
            и хорошего качества.
          </span>
        }
      />
      <Button onClick={closeWindow} className={styles.sentPhoto}>
        Фото отправлено
      </Button>
    </>
  );
};
