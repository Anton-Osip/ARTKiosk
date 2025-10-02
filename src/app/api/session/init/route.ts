import { NextResponse } from 'next/server';

// Данные из JSON файла
const responseMockData = {
  session_id: 'session-1758636332788-8ck5dvnxu',
  qr_token: 'qr-1758636332788-abc123def',
  qr_url: 'http://192.168.100.33:3000/qr/qr-1758636332788-abc123def',
  expiresAt: 1758636932788,
};

export async function POST() {
  return NextResponse.json({
    resultCode: 0,
    messages: [],
    fieldsErrors: [],
    data: responseMockData,
  });
  // return NextResponse.json(
  //   { error: 'Missing required fields: lang, ttlSec, kioskId' },
  //   { status: 400 }
  // );
}
