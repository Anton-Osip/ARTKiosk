import { NextResponse } from 'next/server';

// Данные из JSON файла
const mockData = {
  ok: true,
};

export async function POST() {
  return NextResponse.json(mockData);
}
