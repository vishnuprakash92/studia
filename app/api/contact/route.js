import { NextResponse } from 'next/server'
import { submitLead } from '../../../lib/leads/submitLead'

export async function POST(request) {
  try {
    const body = await request.json()

    const requiredFields = ['fullName', 'email', 'phone']
    const missingField = requiredFields.find((field) => !body?.[field])

    if (missingField) {
      return NextResponse.json(
        { message: `Missing required field: ${missingField}` },
        { status: 400 }
      )
    }

    const lead = {
      fullName: body.fullName,
      email: body.email,
      phone: body.phone,
      destination: body.destination || 'Undecided',
      message: body.message || '',
    }

    await submitLead(lead)

    return NextResponse.json(
      { message: 'Enquiry submitted successfully' },
      { status: 200 }
    )
  } catch {
    return NextResponse.json(
      { message: 'Unable to process enquiry right now. Please try again.' },
      { status: 500 }
    )
  }
}
