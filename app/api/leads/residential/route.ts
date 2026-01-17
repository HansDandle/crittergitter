import { NextRequest, NextResponse } from 'next/server';
import { validateResidentialLead } from '@/lib/validation';
import { appendResidentialLead } from '@/lib/googleSheets';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate input
    const validation = validateResidentialLead(body);
    if (!validation.valid) {
      return NextResponse.json(
        { errors: validation.errors },
        { status: 400 }
      );
    }

    // Append lead to Google Sheets
    const leadId = await appendResidentialLead(body);

    return NextResponse.json(
      {
        message: 'Lead received. A specialist will contact you soon.',
        leadId,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating residential lead:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { error: 'Failed to process lead', details: errorMessage },
      { status: 500 }
    );
  }
}
