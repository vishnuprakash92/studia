async function sendResendEmail(lead) {
  const apiKey = process.env.RESEND_API_KEY
  const toEmail = process.env.CONTACT_TO_EMAIL

  if (!apiKey || !toEmail) {
    return { delivered: false, reason: 'Resend not configured' }
  }

  const payload = {
    from: process.env.CONTACT_FROM_EMAIL || 'Studia Connect <onboarding@resend.dev>',
    to: [toEmail],
    subject: `New Consultation Enquiry: ${lead.fullName}`,
    text: [
      `Name: ${lead.fullName}`,
      `Email: ${lead.email}`,
      `Phone: ${lead.phone}`,
      `Destination: ${lead.destination || 'Undecided'}`,
      `Message: ${lead.message || 'N/A'}`,
      `Submitted At: ${new Date().toISOString()}`,
    ].join('\n'),
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    const body = await response.text()
    throw new Error(`Resend failed: ${body}`)
  }

  return { delivered: true }
}

async function sendWebhook(lead) {
  const webhookUrl = process.env.LEAD_WEBHOOK_URL

  if (!webhookUrl) {
    return { delivered: false, reason: 'Webhook not configured' }
  }

  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      source: 'studia-connect-web',
      type: 'consultation_enquiry',
      submittedAt: new Date().toISOString(),
      lead,
    }),
  })

  if (!response.ok) {
    const body = await response.text()
    throw new Error(`Webhook failed: ${body}`)
  }

  return { delivered: true }
}

export async function submitLead(lead) {
  const results = []

  results.push(await sendWebhook(lead).catch((error) => ({ delivered: false, reason: error.message })))
  results.push(await sendResendEmail(lead).catch((error) => ({ delivered: false, reason: error.message })))

  // Always keep a local server log for fallback observability.
  console.log('Consultation enquiry received', {
    lead,
    delivery: results,
  })

  return results
}
