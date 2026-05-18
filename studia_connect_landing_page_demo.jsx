'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useState } from 'react'
import AddressPanel from './components/AddressPanel'
import { contactDetails } from './lib/contactData'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Destinations', href: '#destinations' },
  { label: 'Services', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
]

const trustIndicators = [
  { icon: 'counselling', text: 'Personalised Counselling' },
  { icon: 'consultants', text: 'Dedicated Overseas Consultants' },
  { icon: 'ethical', text: 'Ethical Guidance' },
  { icon: 'student', text: 'Student-Centered Support' },
  { icon: 'visa', text: 'Visa Assistance' },
  { icon: 'career', text: 'Career-Focused Guidance' },
]

const services = [
  {
    stepLabel: 'Counselling',
    title: 'Personalised Career & Education Counselling',
    icon: '🎓',
    description:
      'Receive one-on-one guidance tailored to your academic goals, career aspirations, budget, and preferred destination. Our experienced consultants help you make informed decisions with personalised support throughout your study abroad journey.',
    supportDescription:
      'We begin with deep student discovery to align career ambitions, academic profile, and destination strategy before any application decisions.',
    tags: [
      'Career-Focused Guidance',
      'Dedicated Student Advisors',
      'Personalised Planning',
      'Transparent Guidance',
    ],
  },
  {
    stepLabel: 'Course Selection',
    title: 'University & Course Selection',
    icon: '📘',
    description:
      'Discover the right universities and programs that align with your interests, academic background, and future career plans. We simplify the selection process by helping you compare institutions, courses, rankings, and opportunities.',
    supportDescription:
      'Our team helps shortlist universities and programs with strong outcomes, balancing rankings, affordability, and long-term career fit.',
    tags: [
      'Global University Access',
      'Course Matching',
      'Career Alignment',
      'Budget Planning',
    ],
  },
  {
    stepLabel: 'Applications',
    title: 'Application Assistance',
    icon: '📄',
    description:
      'From documentation to application submission, we provide complete assistance to ensure accuracy and timely processing. Our team helps strengthen your profile and improve your chances of admission to leading universities.',
    supportDescription:
      'From SOP structuring to profile presentation and deadline management, we execute an end-to-end admission workflow with precision.',
    tags: [
      'SOP Guidance',
      'Documentation Support',
      'Application Management',
      'Admission Strategy',
    ],
  },
  {
    stepLabel: 'Visa',
    title: 'Visa Guidance',
    icon: '✔️',
    description:
      'Navigate the student visa process with confidence through expert support and transparent guidance. We assist with documentation, financial requirements, interview preparation, and application procedures for a smooth visa experience.',
    supportDescription:
      'Our advisors coordinate visa documentation, financial proofs, interview preparation, and compliance checkpoints for a smoother filing process.',
    tags: [
      'Visa Documentation',
      'Financial Guidance',
      'Interview Preparation',
      'Compliance Support',
    ],
  },
  {
    stepLabel: 'Departure',
    title: 'Pre-Departure Support',
    icon: '✈️',
    description:
      'Prepare for your overseas transition with comprehensive pre-departure guidance. From accommodation and travel planning to cultural orientation and essential checklists, we help students feel confident before they fly.',
    supportDescription:
      'Before departure, students receive practical relocation planning including stay, travel readiness, and transition orientation support.',
    tags: [
      'Travel Planning',
      'Accommodation Support',
      'Insurance Guidance',
      'Orientation Sessions',
    ],
  },
  {
    stepLabel: 'Overseas Support',
    title: 'On-arrival assistance',
    icon: '🎧',
    description:
      'Our support continues even after you arrive abroad. We provide ongoing assistance for settling in, local support, academic adjustments, and student wellbeing to ensure a comfortable international education experience.',
    supportDescription:
      'Our support extends post-arrival with settlement guidance, local coordination, and wellbeing-focused assistance throughout the study period.',
    tags: [
      'Settlement Assistance',
      'Student Wellbeing',
      'Local Support',
      'Ongoing Guidance',
    ],
  },
]

function TrustIcon({ type }) {
  const shared = {
    width: 22,
    height: 22,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  }

  if (type === 'counselling') {
    return (
      <svg {...shared}>
        <path d="M4 6.5a2.5 2.5 0 0 1 2.5-2.5h11A2.5 2.5 0 0 1 20 6.5v6A2.5 2.5 0 0 1 17.5 15H10l-4 4v-4H6.5A2.5 2.5 0 0 1 4 12.5z" />
      </svg>
    )
  }

  if (type === 'consultants') {
    return (
      <svg {...shared}>
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
        <path d="M14.5 19a4 4 0 0 1 6 0" />
      </svg>
    )
  }

  if (type === 'ethical') {
    return (
      <svg {...shared}>
        <path d="M12 3 5 6v5c0 5.1 3 8.4 7 10 4-1.6 7-4.9 7-10V6z" />
        <path d="m9.5 12.2 1.8 1.8 3.7-3.7" />
      </svg>
    )
  }

  if (type === 'student') {
    return (
      <svg {...shared}>
        <path d="m3 9 9-4 9 4-9 4z" />
        <path d="M7 11.5V15c0 1.5 2.2 3 5 3s5-1.5 5-3v-3.5" />
        <path d="M21 10v5" />
      </svg>
    )
  }

  if (type === 'visa') {
    return (
      <svg {...shared}>
        <rect x="5" y="3.5" width="14" height="17" rx="2.5" />
        <path d="M9 8.5h6" />
        <path d="M9 12h6" />
        <path d="m9 15.5 1.8 1.8L15 13" />
      </svg>
    )
  }

  return (
    <svg {...shared}>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 15V9" />
      <path d="m9.5 11.5 2.5-2.5 2.5 2.5" />
    </svg>
  )
}

export default function StudiaConnectLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionState, setSubmissionState] = useState({ type: '', message: '' })
  const [activeServiceStep, setActiveServiceStep] = useState(0)
  const prefersReducedMotion = useReducedMotion()

  const reveal = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 24 },
    visible: { opacity: 1, y: 0 },
  }

  const closeMenu = () => setIsMenuOpen(false)

  const handleContactSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    setSubmissionState({ type: '', message: '' })

    const formData = new FormData(event.currentTarget)
    const payload = Object.fromEntries(formData.entries())

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const data = await response.json()

      if (!response.ok) {
        setSubmissionState({
          type: 'error',
          message: data.message || 'Unable to submit enquiry. Please try again.',
        })
        return
      }

      setSubmissionState({
        type: 'success',
        message: 'Thanks. Your enquiry has been received. Our team will contact you shortly.',
      })
      event.currentTarget.reset()
    } catch {
      setSubmissionState({
        type: 'error',
        message: 'Network error. Please check your connection and try again.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div
      id="home"
      className="min-h-screen bg-[#f7f7f5] text-[#0d2345] font-sans"
      style={{ scrollBehavior: 'smooth' }}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:rounded-md focus:shadow-lg"
      >
        Skip to main content
      </a>

      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-serif font-semibold tracking-tight">Studia Connect</h1>
            <p className="text-xs tracking-[0.3em] text-[#b28b4f] uppercase">Global Education</p>
          </div>

          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#23395d]" aria-label="Primary Navigation">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="hover:text-[#b28b4f]">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/917338839931"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-[#25D366] text-white hover:bg-[#128C7E] shadow-lg transition-all"
              aria-label="Chat on WhatsApp"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.01 2.014c-5.46 0-9.91 4.46-9.91 9.94 0 1.76.46 3.44 1.33 4.93L2.06 22l5.24-1.37c1.45.82 3.12 1.25 4.86 1.25 5.46 0 9.91-4.46 9.91-9.93 0-5.48-4.46-9.936-10.06-9.936zM17.43 16.3c-.22.61-1.29 1.18-1.78 1.25-.45.06-.98.11-3.23-.83-2.7-1.12-4.41-3.92-4.54-4.1-.14-.17-1.09-1.46-1.09-2.79 0-1.33.69-2.01.93-2.26.24-.25.53-.32.7-.32.18 0 .35 0 .5.01.16.01.37-.06.57.43.2.48.69 1.68.75 1.8.06.12.1.26.02.43-.09.17-.13.27-.26.43-.13.15-.28.34-.39.46-.13.13-.27.27-.12.53.15.26.68 1.13 1.46 1.83.99.91 1.85 1.2 2.11 1.33.26.13.41.11.56-.06.15-.17.65-.75.82-1.01.17-.26.34-.22.58-.13.23.09 1.48.7 1.73.83.25.13.41.19.47.3.06.11.06.63-.16 1.24z"/>
              </svg>
            </a>
            <a
              href="#contact"
              className="hidden sm:inline-flex bg-[#082b5f] hover:bg-[#0f3f84] text-white px-6 py-3 rounded-full text-sm font-medium shadow-lg transition-all"
            >
              Book Free Consultation
            </a>

            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              className="inline-flex lg:hidden items-center justify-center w-11 h-11 rounded-full border border-[#d8dfe9] bg-white text-[#082b5f]"
              aria-label="Toggle mobile menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav id="mobile-nav" className="lg:hidden border-t border-gray-100 bg-white px-6 py-4" aria-label="Mobile Navigation">
            <div className="flex flex-col gap-3 text-[#23395d] font-medium">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-lg px-3 py-2 hover:bg-[#f7f7f5]"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={closeMenu}
                className="mt-2 inline-flex justify-center bg-[#082b5f] hover:bg-[#0f3f84] text-white px-5 py-3 rounded-full text-sm font-medium"
              >
                Book Free Consultation
              </a>
            </div>
          </nav>
        )}
      </header>

      <main id="main-content">
        <section className="relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=2070&auto=format&fit=crop')",
            }}
            role="img"
            aria-label="Students exploring overseas education destinations"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#f7f7f5] via-[#f7f7f5]/90 to-transparent" />

          <motion.div
            className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32 grid lg:grid-cols-2 gap-10 items-center"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="max-w-xl">
              <p className="uppercase tracking-[0.35em] text-[#b28b4f] text-sm mb-5 font-medium">
                Study In
              </p>

              <h2 className="text-5xl sm:text-6xl lg:text-7xl leading-none font-serif mb-8">
                New Zealand & <br /> Australia
              </h2>

              <div className="space-y-2 text-3xl sm:text-4xl lg:text-5xl font-serif leading-tight mb-8">
                <p>
                  Your <span className="text-[#b28b4f]">Dream.</span>
                </p>
                <p>
                  Your <span className="text-[#b28b4f]">Destination.</span>
                </p>
                <p>
                  Your <span className="text-[#b28b4f]">Future.</span>
                </p>
              </div>

              <p className="text-lg text-[#4d5b72] leading-relaxed mb-10 max-w-lg">
                Personalised overseas education guidance with dedicated consultants in India,
                New Zealand, and Australia.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="bg-[#082b5f] hover:bg-[#0f3f84] text-white px-8 py-4 rounded-full font-medium shadow-xl transition-all"
                >
                  Book Free Consultation
                </a>

                <a
                  href="#destinations"
                  className="border border-[#0d2345] text-[#0d2345] px-8 py-4 rounded-full font-medium hover:bg-white transition-all"
                >
                  Explore Destinations
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        <motion.section
          className="max-w-7xl mx-auto px-6 -mt-10 relative z-20"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="bg-white rounded-[2rem] shadow-2xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 overflow-hidden">
            {trustIndicators.map((item) => (
              <div
                key={item.text}
                className="p-6 border border-gray-100 text-center flex flex-col items-center justify-center gap-3 min-h-[130px] hover:bg-[#faf9f7] transition-colors"
              >
                <span className="text-[#082b5f]" aria-hidden="true">
                  <TrustIcon type={item.icon} />
                </span>
                <p className="text-sm font-semibold leading-relaxed text-[#1b3154]">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="destinations"
          className="max-w-7xl mx-auto px-6 py-24"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="text-center mb-14">
            <p className="uppercase tracking-[0.35em] text-[#b28b4f] text-sm mb-4">
              Study Destination
            </p>
            <h3 className="text-5xl font-serif">Explore Your Future</h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="relative overflow-hidden rounded-[2rem] min-h-[620px] shadow-xl group">
              <img
                src="https://images.unsplash.com/photo-1507699622108-4be3abd695ad?q=80&w=1974&auto=format&fit=crop"
                alt="New Zealand city skyline for international study destination"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#082b5f]/90 via-[#082b5f]/50 to-transparent" />

              <div className="relative p-10 h-full flex flex-col justify-between text-white">
                <div>
                  <p className="uppercase tracking-[0.3em] text-sm mb-3 text-[#d6b37a]">
                    Study Destination
                  </p>

                  <h4 className="text-5xl font-serif mb-6">Study In New Zealand</h4>

                  <p className="text-lg leading-relaxed max-w-md text-white/90 mb-8">
                    Experience globally recognised education, practical learning opportunities,
                    and a welcoming student lifestyle.
                  </p>
                </div>

                <div className="bg-white/95 backdrop-blur rounded-[1.5rem] p-8 text-[#082b5f] shadow-2xl max-w-md">
                  <div className="mb-8">
                    <h5 className="uppercase tracking-[0.2em] text-sm font-semibold text-[#b28b4f] mb-4">
                      Top Universities
                    </h5>

                    <ul className="space-y-3 text-base leading-relaxed">
                      <li>• University of Auckland</li>
                      <li>• University of Otago</li>
                      <li>• Massey University</li>
                      <li>• Auckland University of Technology – AUT</li>
                      <li>• Victoria University of Wellington</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="uppercase tracking-[0.2em] text-sm font-semibold text-[#b28b4f] mb-4">
                      Popular Courses
                    </h5>

                    <div className="grid grid-cols-2 gap-y-3 text-sm font-medium">
                      <p>Business</p>
                      <p>Information Technology</p>
                      <p>Nursing</p>
                      <p>Engineering</p>
                      <p>Hospitality</p>
                      <p>Design</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] min-h-[620px] shadow-xl group">
              <img
                src="https://images.unsplash.com/photo-1524293581917-878a6d017c71?q=80&w=2070&auto=format&fit=crop"
                alt="Australian city lights representing study abroad opportunities"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#082b5f]/90 via-[#082b5f]/50 to-transparent" />

              <div className="relative p-10 h-full flex flex-col justify-between text-white">
                <div>
                  <p className="uppercase tracking-[0.3em] text-sm mb-3 text-[#d6b37a]">
                    Study Destination
                  </p>

                  <h4 className="text-5xl font-serif mb-6">Study In Australia</h4>

                  <p className="text-lg leading-relaxed max-w-md text-white/90 mb-8">
                    Build your future with globally ranked universities, multicultural
                    experiences, and strong career pathways.
                  </p>
                </div>

                <div className="bg-white/95 backdrop-blur rounded-[1.5rem] p-8 text-[#082b5f] shadow-2xl max-w-md">
                  <div className="mb-8">
                    <h5 className="uppercase tracking-[0.2em] text-sm font-semibold text-[#b28b4f] mb-4">
                      Top Universities
                    </h5>

                    <ul className="space-y-3 text-base leading-relaxed">
                      <li>• University of Melbourne</li>
                      <li>• University of Sydney</li>
                      <li>• Monash University</li>
                      <li>• University of Queensland</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="uppercase tracking-[0.2em] text-sm font-semibold text-[#b28b4f] mb-4">
                      Popular Courses
                    </h5>

                    <div className="grid grid-cols-2 gap-y-3 text-sm font-medium">
                      <p>AI & Data Analytics</p>
                      <p>Healthcare</p>
                      <p>Engineering</p>
                      <p>Business</p>
                      <p>Psychology</p>
                      <p>Media</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="services"
          className="bg-[#fcfbf8] py-[7.5rem]"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <p className="uppercase tracking-[0.35em] text-[#b28b4f] text-sm mb-4">
                Our Services
              </p>
              <h3 className="text-5xl font-serif mb-4">Your Study Abroad Journey</h3>
              <p className="text-[#5d6a80] max-w-3xl mx-auto text-lg leading-relaxed">
                A carefully guided student journey designed to simplify overseas education
                with expert mentorship, transparent processes, and personalised support at
                every stage.
              </p>
            </div>

            <div className="max-w-6xl mx-auto relative">
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
          </div>
        </motion.section>

        <motion.section
          id="about"
          className="max-w-7xl mx-auto px-6 py-24"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="uppercase tracking-[0.35em] text-[#b28b4f] text-sm mb-5">About Us</p>
              <h3 className="text-5xl font-serif leading-tight mb-8">
                Trusted Advisors For Global Education Journeys
              </h3>
              <p className="text-[#5d6a80] text-lg leading-relaxed mb-6">
                Studia Connect Global Education Private Limited supports students and families through every stage of
                international admissions. From course shortlisting to visa readiness, we
                deliver transparent, student-first guidance.
              </p>
              <p className="text-[#5d6a80] text-lg leading-relaxed">
                With teams in India, New Zealand, and Australia, we combine local mentorship
                with overseas expertise for better academic and career outcomes.
              </p>
            </div>
            <div className="rounded-[2rem] overflow-hidden shadow-2xl min-h-[360px]">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2070&auto=format&fit=crop"
                alt="Education consultants discussing study abroad plans with students"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.section>

        <motion.section
          id="why-us"
          className="max-w-7xl mx-auto px-6 py-24"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="bg-[#082b5f] rounded-[2.5rem] overflow-hidden grid lg:grid-cols-2 items-center shadow-2xl">
            <div className="p-12 lg:p-16 text-white">
              <p className="uppercase tracking-[0.35em] text-[#d6b37a] text-sm mb-5">
                Why Choose Us
              </p>

              <h3 className="text-5xl font-serif leading-tight mb-8">
                Focused Expertise. <br /> Trusted Guidance.
              </h3>

              <p className="text-white/80 text-lg leading-relaxed mb-10">
                Every student receives personalised attention, transparent guidance, and
                dedicated support from experienced overseas education consultants.
              </p>

              <div className="space-y-6">
                {[
                  'Dedicated Overseas Consultants',
                  'One-to-One Student Approach',
                  'Ethical & Transparent Guidance',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 grid place-items-center" aria-hidden="true">
                      ✓
                    </div>
                    <p className="text-lg font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="h-full min-h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
                alt="Students collaborating in a modern campus environment"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.section>

        <motion.section
          id="contact"
          className="bg-white py-24 border-t border-gray-100"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="uppercase tracking-[0.35em] text-[#b28b4f] text-sm mb-5">
                Contact Us
              </p>

              <h3 className="text-5xl font-serif leading-tight mb-8">
                {contactDetails.introTitle}
              </h3>

              <p className="text-[#5d6a80] text-lg leading-relaxed max-w-xl mb-8">
                {contactDetails.introDescription}
              </p>

              <div className="mb-5">
                <AddressPanel addresses={contactDetails.addresses} />
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="rounded-[1.25rem] border border-[#ece7df] bg-[#faf9f7] p-5">
                  <h4 className="text-base font-semibold mb-3">Phone</h4>
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
                <div className="rounded-[1.25rem] border border-[#ece7df] bg-[#faf9f7] p-5">
                  <h4 className="text-base font-semibold mb-3">Whatsapp</h4>
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

              <div className="flex flex-wrap gap-3">
                <a
                  href={`tel:${contactDetails.phones[0].tel}`}
                  className="border border-[#0d2345] text-[#0d2345] px-5 py-3 rounded-full font-medium hover:bg-[#f7f7f5]"
                >
                  Call India
                </a>
                <a
                  href={`tel:${contactDetails.phones[1].tel}`}
                  className="border border-[#0d2345] text-[#0d2345] px-5 py-3 rounded-full font-medium hover:bg-[#f7f7f5]"
                >
                  Call NZ / AU
                </a>
                <a
                  href={`https://wa.me/${contactDetails.whatsapp[0].wa}`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#1f9d55] hover:bg-[#198748] text-white px-5 py-3 rounded-full font-medium"
                >
                  WhatsApp India
                </a>
                <a
                  href={`https://wa.me/${contactDetails.whatsapp[1].wa}`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#1f9d55] hover:bg-[#198748] text-white px-5 py-3 rounded-full font-medium"
                >
                  WhatsApp NZ / AU
                </a>
              </div>
            </div>

            <form
              onSubmit={handleContactSubmit}
              className="bg-[#f7f7f5] rounded-[2rem] p-8 md:p-10 border border-[#ece7df]"
              aria-label="Consultation booking form"
            >
              <h4 className="text-3xl font-serif mb-2">Book Free Consultation</h4>
              <p className="text-[#5d6a80] mb-6">Share your details and our team will contact you.</p>

              <div className="space-y-4">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium mb-2">Full Name</label>
                  <input
                    id="fullName"
                    name="fullName"
                    required
                    className="w-full rounded-xl border border-[#d8dfe9] bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-[#082b5f]/25"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-xl border border-[#d8dfe9] bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-[#082b5f]/25"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className="w-full rounded-xl border border-[#d8dfe9] bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-[#082b5f]/25"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="destination" className="block text-sm font-medium mb-2">Preferred Destination</label>
                  <select
                    id="destination"
                    name="destination"
                    className="w-full rounded-xl border border-[#d8dfe9] bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-[#082b5f]/25"
                    defaultValue="New Zealand"
                  >
                    <option>New Zealand</option>
                    <option>Australia</option>
                    <option>Undecided</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full rounded-xl border border-[#d8dfe9] bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-[#082b5f]/25"
                    placeholder="Tell us about your study goals"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-6 w-full bg-[#082b5f] hover:bg-[#0f3f84] text-white px-6 py-3 rounded-full text-sm font-medium shadow-lg transition-all"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
              </button>

              {!!submissionState.message && (
                <p
                  className={`mt-4 text-sm ${
                    submissionState.type === 'success' ? 'text-[#1f7a3f]' : 'text-[#b42318]'
                  }`}
                  role="status"
                >
                  {submissionState.message}
                </p>
              )}
            </form>
          </div>
        </motion.section>
      </main>

      <section id="privacy" className="max-w-7xl mx-auto px-6 py-12 border-t border-[#ece7df]">
        <h3 className="text-2xl font-serif mb-3">Privacy Policy</h3>
        <p className="text-[#5d6a80] leading-relaxed">
          We only collect the information required to process consultations and support
          student applications. Your details are handled securely and never sold.
        </p>
      </section>

      <footer className="bg-[#04162f] text-white py-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <div>
            <p className="text-lg font-semibold mb-2">Studia Connect</p>
            <p className="text-white/75 text-sm">Global Education Consultancy</p>
          </div>
          <div>
            <p className="font-semibold mb-3">Quick Links</p>
            <div className="flex flex-wrap gap-4 text-sm text-white/80">
              <a href="/about" className="hover:text-white">About</a>
              <a href="/services" className="hover:text-white">Services</a>
              <a href="/contact" className="hover:text-white">Contact</a>
              <a href="/destinations" className="hover:text-white">Destinations</a>
              <a href="/faq" className="hover:text-white">FAQ</a>
              <a href="/blog" className="hover:text-white">Blog</a>
              <a href="/privacy-policy" className="hover:text-white">Privacy Policy</a>
            </div>
          </div>
          <div>
            <p className="font-semibold mb-3">Social</p>
            <div className="flex gap-4 text-sm text-white/80">
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="hover:text-white">Instagram</a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a>
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="hover:text-white">Facebook</a>
            </div>
          </div>
        </div>
        <p className="text-center text-sm tracking-wide mt-8 text-white/75">
          © 2026 Studia Connect Global Education Private Limited. All rights reserved.
        </p>
      </footer>
    </div>
  )
}
