export const metadata = {
  title: 'Study in New Zealand | Studia Connect',
  description:
    'Explore universities, courses, and personalized admission support to study in New Zealand.',
}

export default function NewZealandPage() {
  return (
    <main className="min-h-screen bg-white text-[#0d2345] px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-serif mb-6">Study in New Zealand</h1>
        <p className="text-[#5d6a80] text-lg leading-relaxed mb-6">
          Experience globally recognized education, practical learning opportunities, and a welcoming student lifestyle.
        </p>
        <h2 className="text-2xl font-serif mb-3">Top Universities</h2>
        <ul className="list-disc pl-6 text-[#5d6a80] space-y-1 mb-8">
          <li>University of Auckland</li>
          <li>University of Otago</li>
          <li>Victoria University of Wellington</li>
          <li>Massey University</li>
        </ul>
        <h2 className="text-2xl font-serif mb-3">Popular Courses</h2>
        <p className="text-[#5d6a80]">Business, Information Technology, Nursing, Engineering, Hospitality, Design.</p>
      </div>
    </main>
  )
}
