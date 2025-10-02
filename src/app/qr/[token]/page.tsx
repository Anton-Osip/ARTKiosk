import { MobileScreen } from '@/widgets';

interface QRPageProps {
  params: Promise<{
    token: string;
  }>;
  searchParams: Promise<{
    lang?: string;
  }>;
}

export default async function QRPage({ params, searchParams }: QRPageProps) {
  const { token } = await params;
  const { lang } = await searchParams;

  return (
    <>
      <MobileScreen qrToken={token} initialLang={lang} />
    </>
  );
}
