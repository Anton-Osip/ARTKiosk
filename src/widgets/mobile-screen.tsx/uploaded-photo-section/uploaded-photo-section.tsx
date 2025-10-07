import { clsx } from 'clsx';
import Image from 'next/image';

import { WarningRound } from '@/shared/assets';
import { useTranslations } from '@/shared/lib';
import { Button, InstructionPanel, LoadingSpinner } from '@/shared/ui';

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
        className={clsx(
          styles.instructionPanel,
          isUploading && styles.instructionPanelDisabled
        )}
        icon={<WarningRound width={24} height={24} />}
        text={
          <span className={styles.instructionText}>
            {t('common.instruction')}
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
          {t('uploadedPhoto.replaceButton')}
        </Button>
        <Button
          className={styles.downloadBtn}
          onClick={handleUpload}
          disabled={isUploading}
        >
          {isUploading ? (
            <LoadingSpinner size="md" className={styles.loadingSpinner} />
          ) : (
            t('uploadedPhoto.sendButton')
          )}
        </Button>
      </div>
    </>
  );
};
