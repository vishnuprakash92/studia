import './globals.css'

export const metadata = {
  metadataBase: new URL('https://studiaconnect.com'),
  title: 'Studia Connect | Study in Australia & New Zealand',
  description:
    'Premium overseas education consultancy helping students in India study in Australia and New Zealand with personalized counselling, university guidance, visa support, and consultation booking.',
  keywords: [
    'Study abroad Australia',
    'Study in New Zealand',
    'Overseas education consultant Chennai',
    'Australia student visa',
    'Studia Connect',
  ],
  openGraph: {
    title: 'Studia Connect | Global Education Consultancy',
    description:
      'Your dream destination for overseas education guidance across Australia and New Zealand.',
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
    sameAs: ['https://www.instagram.com', 'https://www.linkedin.com', 'https://www.youtube.com'],
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
