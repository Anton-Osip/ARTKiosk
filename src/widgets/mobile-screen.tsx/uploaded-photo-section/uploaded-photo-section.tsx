import { clsx } from 'clsx';
import Image from 'next/image';

import { Button, InstructionPanel, LoadingSpinner } from '@/shared';
import Warning from '@/shared/assets/warningRound';

import styles from './uploaded-photo-section.module.scss';

interface Props {
  image: string;
  isUploading: boolean;
  buttonClick: () => void;
  handleUpload: () => void;
}

export const UploadedPhotoSection = ({
  image,
  buttonClick,
  isUploading,
  handleUpload,
}: Props) => {
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
        className={clsx(
          styles.instructionPanel,
          isUploading && styles.instructionPanelDisabled
        )}
        icon={<Warning width={24} height={24} />}
        text={
          <span className={styles.instructionText}>
            На фото должен быть только один человек.Убедитесь что селфи удачное
            и хорошего качества.
          </span>
        }
      />
      <div className={styles.btnContainer}>
        <Button
          variant={'secondary'}
          onClick={buttonClick}
          className={styles.downloadBtn}
          disabled={isUploading}
        >
          Заменить
        </Button>
        <Button
          className={styles.downloadBtn}
          onClick={handleUpload}
          disabled={isUploading}
        >
          {isUploading ? (
            <LoadingSpinner size="md" className={styles.loadingSpinner} />
          ) : (
            'Отправить'
          )}
        </Button>
      </div>
    </>
  );
};
