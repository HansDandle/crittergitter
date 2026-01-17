import { NextRequest, NextResponse } from 'next/server';
import { validateEnterpriseLead } from '@/lib/validation';
import { appendEnterpriseLead } from '@/lib/googleSheets';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate input
    const validation = validateEnterpriseLead(body);
    if (!validation.valid) {
      return NextResponse.json(
        { errors: validation.errors },
        { status: 400 }
      );
    }

    // Append lead to Google Sheets
    const leadId = await appendEnterpriseLead(body);

    return NextResponse.json(
      {
        message: 'Project inquiry received. Our team will assess and coordinate with licensed specialists.',
        leadId,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating enterprise lead:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { error: 'Failed to process inquiry', details: errorMessage },
      { status: 500 }
    );
  }
}
