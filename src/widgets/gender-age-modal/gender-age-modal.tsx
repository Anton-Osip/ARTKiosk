'use client';

import Image from 'next/image';
import { useState } from 'react';

import {
  Apply,
  Basket,
  Retry,
  SquareStar,
  User,
  UserGroup,
} from '@/shared/assets';
import { useTakePhoto } from '@/shared/hooks';
import { AgeGroup, Gender, usePhotoStore, useTranslations } from '@/shared/lib';
import { Button, IconContainer, Modal } from '@/shared/ui';

import styles from './gender-age-modal.module.scss';
import { SelectBlock } from './select-block/select-block';
import { Variant } from './select-block/types';

interface GenderAgeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (gender: Gender, ageGroup: AgeGroup) => void;
  onDeletePhoto: () => void;
}

export function GenderAgeModal({
  isOpen,
  onClose,
  onConfirm,
  onDeletePhoto,
}: GenderAgeModalProps) {
  const {
    capturedPhoto,
    gender,
    ageGroup,
    setGender,
    setAgeGroup,
    clearPhotoData,
  } = usePhotoStore();
  const handleTakePhoto = useTakePhoto();
  const tm = useTranslations('Modals.genderAge');

  const [selectedGender, setSelectedGender] = useState<Gender | null>(gender);
  const [selectedAgeGroup, setSelectedAgeGroup] = useState<AgeGroup | null>(
    ageGroup
  );

  console.log('GenderAgeModal render:', {
    isOpen,
    hasImageData: !!capturedPhoto,
  });

  const handleConfirm = () => {
    try {
      if (selectedGender && selectedAgeGroup) {
        // Save to photo store
        setGender(selectedGender);
        setAgeGroup(selectedAgeGroup);
        onConfirm(selectedGender, selectedAgeGroup);
      }
    } catch (error) {
      console.error('Error in handleConfirm:', error);
    }
  };

  const handleDeletePhoto = () => {
    try {
      clearPhotoData();
      onDeletePhoto();
    } catch (error) {
      console.error('Error in handleDeletePhoto:', error);
    }
  };

  const isConfirmDisabled = !selectedGender || !selectedAgeGroup;
  const Gender: Variant<Gender>[] = [
    { value: 'male', title: tm('gender.male') },
    { value: 'female', title: tm('gender.female') },
  ];
  const Age: Variant<AgeGroup>[] = [
    { value: 'child', title: tm('age.child') },
    { value: 'teen', title: tm('age.teen') },
    { value: 'young', title: tm('age.young') },
    { value: 'adult', title: tm('age.adult') },
    { value: 'mature', title: tm('age.mature') },
  ];

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="xl"
      className={styles.modalContainer}
    >
      {/* Photo Display */}
      <div className={styles.photoContainer}>
        {capturedPhoto && (
          <Image
            src={capturedPhoto}
            alt="Captured photo"
            className={styles.photo}
            width={298}
            height={395}
            style={{ objectFit: 'cover' }}
          />
        )}
      </div>

      {/* Selection Form */}
      <div className={styles.selectionForm}>
        {/* Info Section */}
        <div className={styles.infoSection}>
          <IconContainer size="xl" variant="surface">
            <SquareStar />
          </IconContainer>
          <p className={styles.infoText}>{tm('infoText')}</p>
          <Button
            onClick={handleTakePhoto}
            size={'lg'}
            icon={<Retry />}
            className={styles.retry}
            variant={'ghost'}
          />
        </div>

        <SelectBlock
          title={tm('gender.title')}
          selectedVariant={selectedGender}
          setSelectedVariant={setSelectedGender}
          variantList={Gender}
          icon={<User />}
        />
        <SelectBlock
          title={tm('age.title')}
          selectedVariant={selectedAgeGroup}
          setSelectedVariant={setSelectedAgeGroup}
          variantList={Age}
          icon={<UserGroup />}
        />
      </div>

      {/* Action Buttons */}
      <div className={styles.actionButtons}>
        <Button
          variant="secondary"
          size="md"
          icon={<Basket style={{ color: 'white' }} />}
          onClick={handleDeletePhoto}
          className={styles.deleteButton}
        >
          {tm('deletePhoto')}
        </Button>

        <Button
          variant="primary"
          size="md"
          icon={<Apply />}
          onClick={handleConfirm}
          disabled={isConfirmDisabled}
          // className={styles.confirmButton}
        />
      </div>
    </Modal>
  );
}
