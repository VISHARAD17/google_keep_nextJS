import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  // Return a message with the user ID
  return NextResponse.json({ message: `User ID: ${id}` });
}
