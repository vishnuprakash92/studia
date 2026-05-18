export const metadata = {
  title: 'Blog | Studia Connect',
  description:
    'Insights on universities, visa updates, and study abroad planning for New Zealand and Australia.',
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f5] text-[#0d2345] px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-serif mb-6">Blog</h1>
        <p className="text-[#5d6a80] text-lg leading-relaxed mb-8">
          Education insights, visa trends, and destination guides will be published here.
        </p>
        <article className="rounded-3xl border border-[#ece7df] bg-white p-8">
          <h2 className="text-2xl font-serif mb-2">Content Hub Ready</h2>
          <p className="text-[#5d6a80]">This route is set up for CMS integration in the next phase.</p>
        </article>
      </div>
    </main>
  )
}
