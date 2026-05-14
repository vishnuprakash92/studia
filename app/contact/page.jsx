export const metadata = {
  title: 'Contact | Studia Connect',
  description:
    'Contact Studia Connect for personalized consultation on studying in Australia and New Zealand.',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f5] text-[#0d2345] px-6 py-16">
      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12">
        <section>
          <p className="uppercase tracking-[0.35em] text-[#b28b4f] text-sm mb-5">Contact Us</p>
          <h1 className="text-5xl font-serif mb-6">Your Global Education Journey Starts Here</h1>
          <p className="text-[#5d6a80] text-lg leading-relaxed mb-6">
            Reach out to discuss your preferred destination, program, and intake timeline.
          </p>
          <div className="space-y-3 text-[#5d6a80]">
            <p>Phone: +91 73388 39931</p>
            <p>Email: info@studiaconnect.com</p>
            <p>Support: Australia & New Zealand</p>
          </div>
        </section>
        <section className="rounded-3xl border border-[#ece7df] bg-white p-8">
          <h2 className="text-2xl font-serif mb-4">Book Consultation</h2>
          <p className="text-[#5d6a80] mb-6">Use the homepage form to submit your enquiry instantly.</p>
          <div className="flex gap-3">
            <a href="/" className="rounded-full bg-[#082b5f] px-5 py-3 text-white font-medium">
              Go to Home
            </a>
            <a
              href="https://wa.me/917338839931"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#1f9d55] px-5 py-3 text-white font-medium"
            >
              WhatsApp
            </a>
          </div>
        </section>
      </div>
    </main>
  )
}
