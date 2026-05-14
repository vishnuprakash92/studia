export const metadata = {
  title: 'Privacy Policy | Studia Connect',
  description: 'Privacy policy for Studia Connect lead capture and communication workflows.',
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-[#0d2345] px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-serif mb-8">Privacy Policy</h1>
        <p className="text-[#5d6a80] leading-relaxed mb-4">
          We collect only the information required to provide consultation and application support.
        </p>
        <p className="text-[#5d6a80] leading-relaxed mb-4">
          Your details are used for communication regarding admissions, documentation, and visa processes.
        </p>
        <p className="text-[#5d6a80] leading-relaxed">
          We do not sell personal data to third parties. For requests related to your data, contact info@studiaconnect.com.
        </p>
      </div>
    </main>
  )
}
