export const metadata = {
  title: 'About Us | Studia Connect',
  description:
    'Learn how Studia Connect helps students from India pursue higher education in Australia and New Zealand with transparent, personalized support.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f5] text-[#0d2345] px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <p className="uppercase tracking-[0.35em] text-[#b28b4f] text-sm mb-5">About Us</p>
        <h1 className="text-5xl font-serif mb-8">Trusted Overseas Education Advisors</h1>
        <p className="text-lg text-[#5d6a80] leading-relaxed mb-6">
          Studia Connect guides students through university selection, applications, and visa preparation
          for Australia and New Zealand. Our counselling approach is transparent, student-focused,
          and outcome-driven.
        </p>
        <p className="text-lg text-[#5d6a80] leading-relaxed">
          With local support in India and destination-level understanding abroad, we simplify every step
          of your global education journey.
        </p>
      </div>
    </main>
  )
}
