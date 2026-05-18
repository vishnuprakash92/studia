import './globals.css'

export const metadata = {
  metadataBase: new URL('https://studiaconnect.com'),
  title: 'Studia Connect | Study in New Zealand & Australia',
  description:
    'Premium overseas education consultancy helping students in India study in New Zealand and Australia with personalized counselling, university guidance, visa support, and consultation booking.',
  keywords: [
    'Study in New Zealand',
    'Study abroad Australia',
    'Overseas education consultant Chennai',
    'New Zealand student visa',
    'Australia student visa',
    'Studia Connect',
  ],
  openGraph: {
    title: 'Studia Connect | Global Education Consultancy',
    description:
      'Your dream destination for overseas education guidance across New Zealand and Australia.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Studia Connect',
    url: 'https://studiaconnect.com',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      telephone: '+91 73388 39931',
      email: 'info@studiaconnect.com',
    },
    areaServed: ['IN', 'AU', 'NZ'],
    sameAs: ['https://www.instagram.com', 'https://www.linkedin.com', 'https://www.facebook.com'],
  }

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
      </body>
    </html>
  )
}
