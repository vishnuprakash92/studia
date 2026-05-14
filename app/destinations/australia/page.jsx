export const metadata = {
  title: 'Study in Australia | Studia Connect',
  description:
    'Discover top universities, popular programs, and expert consultation support for studying in Australia.',
}

export default function AustraliaPage() {
  return (
    <main className="min-h-screen bg-white text-[#0d2345] px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-serif mb-6">Study in Australia</h1>
        <p className="text-[#5d6a80] text-lg leading-relaxed mb-6">
          Build your future with globally ranked universities, multicultural experiences, and strong career pathways.
        </p>
        <h2 className="text-2xl font-serif mb-3">Top Universities</h2>
        <ul className="list-disc pl-6 text-[#5d6a80] space-y-1 mb-8">
          <li>University of Melbourne</li>
          <li>University of Sydney</li>
          <li>Monash University</li>
          <li>University of Queensland</li>
        </ul>
        <h2 className="text-2xl font-serif mb-3">Popular Courses</h2>
        <p className="text-[#5d6a80]">AI & Data Analytics, Healthcare, Engineering, Business, Psychology, Media.</p>
      </div>
    </main>
  )
}
