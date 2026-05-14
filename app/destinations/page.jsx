export const metadata = {
  title: 'Destinations | Studia Connect',
  description:
    'Explore top study destinations including Australia and New Zealand with leading universities and career-focused programs.',
}

export default function DestinationsPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f5] text-[#0d2345] px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-serif mb-8">Study Destinations</h1>
        <div className="grid md:grid-cols-2 gap-6">
          <a href="/destinations/australia" className="rounded-3xl border border-[#ece7df] bg-white p-8">
            <h2 className="text-3xl font-serif mb-3">Australia</h2>
            <p className="text-[#5d6a80]">Globally ranked institutions, multicultural campuses, strong career pathways.</p>
          </a>
          <a href="/destinations/new-zealand" className="rounded-3xl border border-[#ece7df] bg-white p-8">
            <h2 className="text-3xl font-serif mb-3">New Zealand</h2>
            <p className="text-[#5d6a80]">High-quality education, practical learning, and a student-friendly lifestyle.</p>
          </a>
        </div>
      </div>
    </main>
  )
}
