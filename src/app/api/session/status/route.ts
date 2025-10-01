import { NextResponse } from 'next/server';

// Данные из JSON файла
const mockDataPending = {
  status: 'pending',
  expiresAt: 1758636932788,
};

// const mockDataUploaded = {
//   status: 'uploaded',
//   expiresAt: 1737000600,
//   photo: {
//     objectKey: 'tmp/mock.jpg',
//     previewUrl: '/mock/photo.jpg',
//   },
// };

// const mockDataExpired = { status: 'expired' };

export async function GET() {
  return NextResponse.json({
    resultCode: 0,
    messages: [],
    fieldsErrors: [],
    data: mockDataPending,
  });

  // return NextResponse.json({ error: 'Неверный формат' }, { status: 400 });

  // return NextResponse.json({ error: 'Слишком большой файл' }, { status: 413 });

  // return NextResponse.json({ error: 'Сессия истекла' }, { status: 410 });

  // return NextResponse.json(
  //   { error: 'Ошибка сервера' },
  //   { status: 500 }
  // );
}
