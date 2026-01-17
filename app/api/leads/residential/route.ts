import { NextRequest, NextResponse } from 'next/server';
import { validateResidentialLead } from '@/lib/validation';
import { createResidentialLead } from '@/lib/leadRepository';
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
    const validation = validateResidentialLead(body);
    if (!validation.valid) {
      return NextResponse.json(
        { errors: validation.errors },
        { status: 400 }
      );
    }

    // Create lead in database
    const lead = await createResidentialLead(body);

    return NextResponse.json(
      {
        message: 'Lead received. A specialist will contact you soon.',
        leadId: lead.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating residential lead:', error);
    return NextResponse.json(
      { error: 'Failed to process lead' },
      { status: 500 }
    );
  }
}
