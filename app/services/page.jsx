const services = [
  'Personalised Student Counselling',
  'University & Course Selection',
  'Application Assistance',
  'Visa Guidance',
  'Pre-Departure Support',
  'Overseas Student Assistance',
]

export const metadata = {
  title: 'Services | Studia Connect',
  description:
    'Explore Studia Connect services including counselling, university selection, applications, visa guidance, and pre-departure support.',
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-[#0d2345] px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase tracking-[0.35em] text-[#b28b4f] text-sm mb-5">Our Services</p>
        <h1 className="text-5xl font-serif mb-10">Complete Student Support</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <article key={service} className="rounded-3xl border border-[#ece7df] bg-[#f7f7f5] p-8">
              <h2 className="text-2xl font-serif mb-3">{service}</h2>
              <p className="text-[#5d6a80] leading-relaxed">
                Personalized and practical support tailored to your academic and career goals.
              </p>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
