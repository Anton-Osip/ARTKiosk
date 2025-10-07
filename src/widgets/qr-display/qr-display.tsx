'use client';

import Image from 'next/image';
import QRCode from 'qrcode';
import { useEffect, useState } from 'react';

import { Loader } from '@/shared/assets';
import { Locale, useLocaleStore } from '@/shared/lib';
import { Button } from '@/shared/ui';

import styles from './qr-display.module.scss';

interface IProps {
  isLoadingInitData: boolean;
  qrImageUrl?: string | null;
  error: string | undefined;
  fetchSessionData: (locale: Locale) => Promise<void>;
}

export const QRDisplay = ({
  fetchSessionData,
  isLoadingInitData,
  qrImageUrl,
  error,
}: IProps) => {
  const [qrImage, setQrImageUrl] = useState<string | null>(qrImageUrl || null);
  const [isGeneratingQR, setIsGeneratingQR] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(error);
  const { locale } = useLocaleStore();

  const generateQRCode = async (url: string) => {
    try {
      setIsGeneratingQR(true);

      const qrDataURL = await QRCode.toDataURL(url, {
        width: 218,
        margin: 2,
        color: {
          dark: '#000000',
          light: '#FFFFFF',
        },
        errorCorrectionLevel: 'M',
      });

      setQrImageUrl(qrDataURL);
    } catch (err) {
      setErrorMessage(
        err instanceof Error ? err.message : 'Failed to initialize session'
      );
    } finally {
      setIsGeneratingQR(false);
    }
  };

  useEffect(() => {
    if (qrImageUrl) {
      if (qrImageUrl.match(/\.(jpg|jpeg|png|gif|webp)$/i)) {
        setQrImageUrl(qrImageUrl);
      } else {
        generateQRCode(qrImageUrl);
      }
    }
  }, [qrImageUrl]);

  return (
    <div className={`${styles.qrContainer}`}>
      {(error || errorMessage) && (
        <Button onClick={() => fetchSessionData(locale)}>Загрузить QR</Button>
      )}
      {!(error || errorMessage) &&
        (isGeneratingQR || isLoadingInitData ? (
          <Loader />
        ) : qrImage ? (
          <>
            <Image src={qrImage} alt={'QR'} width={218} height={218} />
          </>
        ) : (
          <Loader />
        ))}
    </div>
  );
};
