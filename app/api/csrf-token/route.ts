import { NextRequest, NextResponse } from 'next/server';
import { generateCsrfToken, storeCsrfToken } from '@/lib/csrf';

export async function GET(request: NextRequest) {
  try {
    const token = generateCsrfToken();
    storeCsrfToken(token);

    return NextResponse.json(
      { token },
      {
        headers: {
          'Cache-Control': 'no-store, must-revalidate',
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('CSRF token generation error:', error);
    return NextResponse.json(
      { error: 'Failed to generate CSRF token' },
      { status: 500 }
    );
  }
}
