import AddressPanel from '../../components/AddressPanel'
import { contactDetails } from '../../lib/contactData'

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
          <h1 className="text-5xl font-serif mb-6">{contactDetails.introTitle}</h1>
          <p className="text-[#5d6a80] text-lg leading-relaxed mb-6">
            {contactDetails.introDescription}
          </p>

          <div className="mb-5">
            <AddressPanel addresses={contactDetails.addresses} />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-[#ece7df] bg-white p-6">
              <h2 className="text-xl font-semibold mb-4">Phone</h2>
              <div className="space-y-3 text-[#5d6a80]">
                {contactDetails.phones.map((item) => (
                  <div key={item.region}>
                    <p className="text-sm text-[#0d2345] font-medium">{item.label}</p>
                    <a href={`tel:${item.tel}`} className="hover:text-[#082b5f]">
                      {item.display}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-[#ece7df] bg-white p-6">
              <h2 className="text-xl font-semibold mb-4">Whatsapp</h2>
              <div className="space-y-3 text-[#5d6a80]">
                {contactDetails.whatsapp.map((item) => (
                  <div key={item.region}>
                    <p className="text-sm text-[#0d2345] font-medium">{item.region}</p>
                    <a
                      href={`https://wa.me/${item.wa}`}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-[#082b5f]"
                    >
                      {item.display}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="rounded-3xl border border-[#ece7df] bg-white p-8">
          <h2 className="text-2xl font-serif mb-4">Book Consultation</h2>
          <p className="text-[#5d6a80] mb-6">Use the homepage form to submit your enquiry instantly.</p>
          <div className="flex flex-wrap gap-3">
            <a href="/" className="rounded-full bg-[#082b5f] px-5 py-3 text-white font-medium">
              Go to Home
            </a>
            <a
              href={`https://wa.me/${contactDetails.whatsapp[0].wa}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#1f9d55] px-5 py-3 text-white font-medium"
            >
              WhatsApp India
            </a>
            <a
              href={`https://wa.me/${contactDetails.whatsapp[1].wa}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#1f9d55] px-5 py-3 text-white font-medium"
            >
              WhatsApp NZ / AU
            </a>
          </div>
        </section>
      </div>
    </main>
  )
}
