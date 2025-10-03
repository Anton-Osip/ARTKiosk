import styles from './overlay.module.scss';

type Props = {
  className?: string;
  handleOverlayClick: () => void;
};

export const Overlay = ({ className, handleOverlayClick }: Props) => {
  return (
    <div
      className={`${styles.overlay} ${className}`}
      onClick={handleOverlayClick}
    />
  );
};
