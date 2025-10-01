import { NextResponse } from 'next/server';

export async function PUT(request: Request) {
  const contentType = request.headers.get('content-type');

  const body = await request.arrayBuffer();

  const mockData = {
    success: true,
    size: body.byteLength,
    message: 'File uploaded successfully',
    contentType: contentType,
  };

  return NextResponse.json(mockData, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'PUT, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'PUT, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
