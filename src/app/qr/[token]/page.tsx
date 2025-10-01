import { MobileScreen } from '@/widgets';

interface QRPageProps {
  params: Promise<{
    token: string;
  }>;
}

export default async function QRPage({ params }: QRPageProps) {
  const { token } = await params;

  return (
    <div>
      <MobileScreen qrToken={token} />
    </div>
  );
}
