export const metadata = {
  title: 'Terms & Conditions | Studia Connect',
  description: 'Terms and conditions for Studia Connect education counselling services.',
}

export default function TermsConditionsPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f5] text-[#0d2345] px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-serif mb-8">Terms & Conditions</h1>
        <p className="text-[#5d6a80] leading-relaxed mb-4">
          Consultancy recommendations are based on current admission criteria and public policy updates.
        </p>
        <p className="text-[#5d6a80] leading-relaxed mb-4">
          University admissions and visa decisions are made by official institutions and authorities.
        </p>
        <p className="text-[#5d6a80] leading-relaxed">
          Submission of enquiry forms indicates consent to be contacted by Studia Connect representatives.
        </p>
      </div>
    </main>
  )
}
