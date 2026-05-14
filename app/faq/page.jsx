const faqs = [
  {
    q: 'When should I start my study abroad application?',
    a: 'Start at least 8-12 months before your target intake for better university and visa planning.',
  },
  {
    q: 'Do you assist with student visas?',
    a: 'Yes. We guide you through documentation, financial proofs, and interview preparation.',
  },
  {
    q: 'Can working professionals apply?',
    a: 'Yes. We support profile evaluation and program selection based on your career goals.',
  },
]

export const metadata = {
  title: 'FAQ | Studia Connect',
  description: 'Frequently asked questions about studying in Australia and New Zealand with Studia Connect support.',
}

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-white text-[#0d2345] px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-serif mb-10">Frequently Asked Questions</h1>
        <div className="space-y-5">
          {faqs.map((item) => (
            <article key={item.q} className="rounded-2xl border border-[#ece7df] p-6 bg-[#f7f7f5]">
              <h2 className="text-xl font-semibold mb-2">{item.q}</h2>
              <p className="text-[#5d6a80]">{item.a}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
