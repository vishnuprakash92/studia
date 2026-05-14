const services = [
  {
    title: 'Personalised Student Counselling',
    description:
      'Receive one-on-one guidance tailored to your academic goals, career aspirations, budget, and preferred destination. Our experienced consultants help you make informed decisions with personalised support throughout your study abroad journey.',
  },
  {
    title: 'University & Course Selection',
    description:
      'Discover the right universities and programs that align with your interests, academic background, and future career plans. We simplify the selection process by helping you compare institutions, courses, rankings, and opportunities.',
  },
  {
    title: 'Application Assistance',
    description:
      'From documentation to application submission, we provide complete assistance to ensure accuracy and timely processing. Our team helps strengthen your profile and improve your chances of admission to leading universities.',
  },
  {
    title: 'Visa Guidance',
    description:
      'Navigate the student visa process with confidence through expert support and transparent guidance. We assist with documentation, financial requirements, interview preparation, and application procedures for a smooth visa experience.',
  },
  {
    title: 'Pre-Departure Support',
    description:
      'Prepare for your overseas transition with comprehensive pre-departure guidance. From accommodation and travel planning to cultural orientation and essential checklists, we help students feel confident before they fly.',
  },
  {
    title: 'Overseas Student Assistance',
    description:
      'Our support continues even after you arrive abroad. We provide ongoing assistance for settling in, local support, academic adjustments, and student wellbeing to ensure a comfortable international education experience.',
  },
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
            <article key={service.title} className="rounded-3xl border border-[#ece7df] bg-[#f7f7f5] p-8">
              <h2 className="text-2xl font-serif mb-3">{service.title}</h2>
              <p className="text-[#5d6a80] leading-relaxed">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
