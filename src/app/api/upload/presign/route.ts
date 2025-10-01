import { NextResponse } from 'next/server';

// Данные из JSON файла
const mockData = {
  objectKey: 'tmp/session-1758636332788-8ck5dvnxu-1758636400000.jpg',
  upload: {
    url: '/api/mock-upload',
    headers: {
      'Content-Type': 'image/jpeg',
    },
  },
  maxBytes: 5242880,
  allowedMime: ['image/jpeg', 'image/png', 'image/webp'],
};

export async function GET() {
  return NextResponse.json({
    resultCode: 0,
    messages: [],
    fieldsErrors: [],
    data: mockData
  });
}
