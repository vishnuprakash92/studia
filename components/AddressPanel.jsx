export default function AddressPanel({ addresses, title = 'ADDRESS' }) {
  return (
    <section className="rounded-[1.5rem] border border-[#e7ded0] bg-white p-6 md:p-7 shadow-[0_10px_30px_rgba(8,43,95,0.06)]">
      <div className="flex items-center gap-2 mb-5">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="text-[#082b5f]"
          aria-hidden="true"
        >
          <path d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
        <h4 className="text-sm font-semibold tracking-[0.2em] text-[#082b5f]">{title}</h4>
      </div>

      <div className="relative">
        <div className="absolute left-4 top-2 bottom-2 w-px bg-[#e7ded0]" aria-hidden="true" />
        <ol className="space-y-4">
          {addresses.map((address) => (
            <li key={address.id} className="relative pl-12">
              <span className="absolute left-0 top-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#082b5f] text-white text-sm font-semibold shadow-sm">
                {address.id}
              </span>
              <article className="rounded-xl border border-[#efe7dc] bg-[#fbfaf8] px-4 py-3">
                <div className="mb-2">
                  <span className="inline-flex items-center gap-1 rounded-full border border-[#e0d6c8] bg-white px-2.5 py-1 text-xs font-medium text-[#37506f]">
                    <span aria-hidden="true">{address.flag}</span>
                    <span>{address.country}</span>
                  </span>
                </div>
                {address.lines.map((line) => (
                  <p key={`${address.id}-${line}`} className="text-[#4f5f79] leading-relaxed">
                    {line}
                  </p>
                ))}
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
