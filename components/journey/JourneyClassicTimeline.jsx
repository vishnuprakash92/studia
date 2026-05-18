'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useState } from 'react'

export default function JourneyClassicTimeline({ services }) {
  const [activeServiceStep, setActiveServiceStep] = useState(0)
  const prefersReducedMotion = useReducedMotion()

  return (
    <div className="max-w-6xl mx-auto relative mt-16">
      <div
        className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-px -translate-x-1/2 bg-gradient-to-b from-[#ebe5dc] via-[#d7c7ad] to-[#ebe5dc]"
        aria-hidden="true"
      />

      <ol className="space-y-8 lg:space-y-20" aria-label="Study abroad journey timeline">
        {services.map((service, index) => {
          const isLeft = index % 2 === 0
          const isOpen = activeServiceStep === index

          return (
            <motion.li
              key={service.title}
              className="relative"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.06, ease: 'easeOut' }}
            >
              <div className="lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-8 lg:items-start">
                <article
                  className={`rounded-[1.75rem] border border-[#ebe5dc] bg-white p-7 md:p-8 shadow-[0_10px_26px_rgba(8,43,95,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_30px_rgba(8,43,95,0.12)] lg:row-start-1 ${
                    isLeft ? 'lg:col-start-1' : 'lg:col-start-3'
                  }`}
                >
                  <div className="flex items-start gap-4 mb-5">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#082b5f] text-white text-xl">
                      {service.icon}
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-[#7f8c9c] mb-1">
                        Step {String(index + 1).padStart(2, '0')} · {service.stepLabel}
                      </p>
                      <h4 className="text-3xl md:text-4xl font-serif leading-tight">
                        {service.title}
                      </h4>
                    </div>
                  </div>
                  <p className="text-[#5d6a80] text-lg leading-relaxed">{service.description}</p>
                </article>

                <button
                  type="button"
                  onClick={() => setActiveServiceStep((current) => (current === index ? -1 : index))}
                  className="hidden lg:inline-flex lg:col-start-2 lg:row-start-1 z-10 h-14 w-14 items-center justify-center rounded-full bg-white text-[#082b5f] border border-[#d8c9b4] font-serif text-lg shadow-[0_8px_20px_rgba(8,43,95,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#082b5f]/35"
                  aria-label={`Toggle details for step ${index + 1}`}
                  aria-expanded={isOpen}
                >
                  {String(index + 1).padStart(2, '0')}
                </button>

                <aside
                  className={`mt-4 lg:mt-0 rounded-[1.75rem] border border-[#ebe5dc] bg-white p-6 md:p-7 shadow-[0_10px_26px_rgba(8,43,95,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_30px_rgba(8,43,95,0.12)] lg:row-start-1 ${
                    isLeft ? 'lg:col-start-3' : 'lg:col-start-1'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <p className="text-xs uppercase tracking-[0.22em] text-[#b28b4f] font-semibold">
                      Student Support
                    </p>
                    <button
                      type="button"
                      onClick={() => setActiveServiceStep((current) => (current === index ? -1 : index))}
                      className="inline-flex lg:hidden h-8 w-8 items-center justify-center rounded-full border border-[#d8c9b4] text-[#082b5f]"
                      aria-label={`Toggle details for step ${index + 1}`}
                      aria-expanded={isOpen}
                    >
                      {isOpen ? '−' : '+'}
                    </button>
                  </div>

                  <p className="text-[#5d6a80] leading-relaxed mb-4">{service.supportDescription}</p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-full border border-[#e6ded2] bg-[#fcfbf8] px-3 py-1 text-xs text-[#49607d]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {isOpen && (
                    <p className="mt-4 text-sm text-[#5d6a80] leading-relaxed">
                      Expanded step insight: this stage is actively coordinated by our
                      consultants with transparent timelines, milestone updates, and
                      personalised student-first guidance.
                    </p>
                  )}
                </aside>
              </div>
            </motion.li>
          )
        })}
      </ol>
    </div>
  )
}
