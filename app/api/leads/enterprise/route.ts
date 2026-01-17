import { NextRequest, NextResponse } from 'next/server';
import { validateEnterpriseLead } from '@/lib/validation';
import { createEnterpriseLead } from '@/lib/leadRepository';
import { verifyCsrfToken } from '@/lib/csrf';

export async function POST(request: NextRequest) {
  try {
    // Verify CSRF token
    const csrfToken = request.headers.get('x-csrf-token');
    if (!csrfToken || !verifyCsrfToken(csrfToken)) {
      return NextResponse.json(
        { error: 'Invalid CSRF token' },
        { status: 403 }
      );
    }

    const body = await request.json();

    // Validate input
    const validation = validateEnterpriseLead(body);
    if (!validation.valid) {
      return NextResponse.json(
        { errors: validation.errors },
        { status: 400 }
      );
    }

    // Create lead in database
    const lead = await createEnterpriseLead(body);

    return NextResponse.json(
      {
        message: 'Project inquiry received. Our team will assess and coordinate with licensed specialists.',
        leadId: lead.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating enterprise lead:', error);
    return NextResponse.json(
      { error: 'Failed to process inquiry' },
      { status: 500 }
    );
  }
}
