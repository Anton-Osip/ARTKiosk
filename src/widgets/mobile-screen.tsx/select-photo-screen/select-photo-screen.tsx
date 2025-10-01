import { Button, CornerBox, InstructionPanel } from '@/shared';
import Download from '@/shared/assets/download';
import PhotoCamera from '@/shared/assets/photoCamera';
import Warning from '@/shared/assets/warningRound';

import styles from './select-photo-screen.module.scss';

interface Props {
  buttonClick: () => void;
}

export const SelectPhotoScreen = ({ buttonClick }: Props) => {
  return (
    <>
      <CornerBox onClick={buttonClick}>
        <PhotoCamera />
        <h2 className={styles.title}>Выберите фото из галереи</h2>
        <span className={styles.subTitle}>JPG/PNG до 5 mb</span>
      </CornerBox>
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
      <Button
        className={styles.downloadBtn}
        icon={<Download />}
        onClick={buttonClick}
      >
        Загрузить
      </Button>
    </>
  );
};
