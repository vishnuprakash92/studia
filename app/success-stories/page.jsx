export const metadata = {
  title: 'Success Stories | Studia Connect',
  description:
    'Read student success stories and outcomes from Studia Connect admissions and visa support journeys.',
}

export default function SuccessStoriesPage() {
  return (
    <main className="min-h-screen bg-white text-[#0d2345] px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-serif mb-6">Success Stories</h1>
        <p className="text-[#5d6a80] text-lg leading-relaxed mb-8">
          Student testimonials and destination outcomes will be published here as the content repository grows.
        </p>
        <article className="rounded-3xl border border-[#ece7df] bg-[#f7f7f5] p-8">
          <h2 className="text-2xl font-serif mb-2">Coming Soon</h2>
          <p className="text-[#5d6a80]">This page is ready for CMS-backed testimonial content in phase 2.</p>
        </article>
      </div>
    </main>
  )
}
