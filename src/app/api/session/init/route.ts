import { NextResponse } from 'next/server';

// Данные из JSON файла
const responseMockData = {
  session_id: 'session-1758636332788-8ck5dvnxu',
  qr_token: 'qr-1758636332788-abc123def',
  qr_url: 'https://art-kiosk.vercel.app/qr/qr-1758636332788-abc123def',
  expiresAt: 1758636932788,
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { lang = 'ru' } = body;

    // Добавляем язык в QR URL
    const qrUrlWithLang = `${responseMockData.qr_url}?lang=${lang}`;

    return NextResponse.json({
      resultCode: 0,
      messages: [],
      fieldsErrors: [],
      data: {
        ...responseMockData,
        qr_url: qrUrlWithLang,
      },
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request body' },
      { status: 400 }
    );
  }
}
