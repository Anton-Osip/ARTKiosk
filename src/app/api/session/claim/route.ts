import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json({
    resultCode: 0,
    messages: [],
    fieldsErrors: [],
    data: {
      session_id: 'session-1758636332788-8ck5dvnxu',
      status: 'pending',
    },
  });

  // return NextResponse.json({ error: 'Сессия истекла' }, { status: 410 });

  // return NextResponse.json(
  //   { error: 'QR уже занят другим телефоном.' },
  //   { status: 409 }
  // );
}
