'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function JourneyStickyTimeline({ services }) {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <div className="max-w-7xl mx-auto mt-16 px-6">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative">
        
        {/* Sticky Left Visual Panel (Desktop only) */}
        <div className="hidden lg:block lg:w-5/12">
          <div className="sticky top-32 bg-[#082b5f] rounded-[2.5rem] p-12 text-white h-[600px] flex flex-col justify-between overflow-hidden shadow-2xl">
            
            {/* Background Accent */}
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#b28b4f] rounded-full blur-[100px] opacity-40" />

            {/* Active Content */}
            <div className="relative z-10">
              <p className="uppercase tracking-[0.3em] text-[#d6b37a] text-sm font-semibold mb-4">
                Step 0{activeStep + 1}
              </p>
              
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <div className="text-8xl mb-8">
                  {services[activeStep].icon}
                </div>
                <h3 className="text-4xl font-serif leading-tight mb-6">
                  {services[activeStep].title}
                </h3>
                <p className="text-lg text-white/80 leading-relaxed mb-8">
                  {services[activeStep].supportDescription}
                </p>
              </motion.div>
            </div>

            {/* Progress Indicator */}
            <div className="relative z-10">
              <div className="flex gap-2">
                {services.map((_, idx) => (
                  <div 
                    key={idx} 
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      activeStep === idx ? 'w-8 bg-[#b28b4f]' : 'w-4 bg-white/20'
                    }`} 
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Scrolling Content Panel */}
        <div className="lg:w-7/12 py-4 lg:py-32 space-y-12 lg:space-y-48">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              onViewportEnter={() => setActiveStep(index)}
              viewport={{ margin: "-40% 0px -40% 0px" }} // Trigger when block is roughly centered
              className="bg-white p-8 lg:p-12 rounded-[2rem] border border-[#ebe5dc] shadow-[0_10px_30px_rgba(8,43,95,0.05)]"
            >
              <div className="lg:hidden flex items-center gap-4 mb-6">
                <span className="w-12 h-12 flex items-center justify-center bg-[#082b5f] text-white rounded-full text-xl">
                  {service.icon}
                </span>
                <p className="uppercase tracking-[0.2em] text-[#b28b4f] text-xs font-semibold">
                  Step 0{index + 1}
                </p>
              </div>

              <h4 className="text-3xl lg:text-4xl font-serif text-[#0d2345] mb-6 leading-tight">
                {service.title}
              </h4>
              
              <p className="text-[#5d6a80] text-lg leading-relaxed mb-8">
                {service.description}
              </p>

              <div className="bg-[#fcfbf8] p-6 rounded-2xl border border-[#e6ded2] mb-8">
                <p className="text-sm uppercase tracking-widest text-[#b28b4f] font-semibold mb-3">
                  Key Support Highlights
                </p>
                <div className="flex flex-col gap-3">
                  {service.tags.map(tag => (
                    <div key={tag} className="flex items-center gap-3 text-[#4d5b72]">
                      <span className="text-[#082b5f]">✓</span>
                      <span>{tag}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="#contact"
                className="inline-flex text-[#082b5f] font-semibold hover:text-[#b28b4f] transition-colors items-center group"
              >
                Discuss this step
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  )
}
