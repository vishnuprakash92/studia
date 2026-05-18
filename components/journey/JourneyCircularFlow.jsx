'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function JourneyCircularFlow({ services }) {
  const [activeStep, setActiveStep] = useState(0)

  // Circular positioning for Desktop
  const getTransform = (index, total) => {
    const angle = (index / total) * 360 - 90 // Start at top (-90deg)
    return `rotate(${angle}deg) translate(280px) rotate(-${angle}deg)`
  }

  const activeService = services[activeStep]

  return (
    <div className="max-w-6xl mx-auto mt-16 px-4">
      {/* Mobile/Tablet View: Interactive Accordion */}
      <div className="lg:hidden space-y-4">
        {services.map((service, index) => (
          <div 
            key={service.title} 
            className={`border rounded-[1.5rem] transition-colors duration-300 ${
              activeStep === index ? 'bg-[#082b5f] text-white border-[#082b5f]' : 'bg-white border-[#ebe5dc]'
            }`}
          >
            <button
              onClick={() => setActiveStep(index)}
              className="w-full text-left p-6 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <span className="text-2xl">{service.icon}</span>
                <span className="font-serif text-xl">{service.stepLabel}</span>
              </div>
              <span className="text-2xl">{activeStep === index ? '−' : '+'}</span>
            </button>
            
            {activeStep === index && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="px-6 pb-6"
              >
                <h4 className="text-2xl font-serif mb-3">{service.title}</h4>
                <p className="opacity-90 leading-relaxed text-sm mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 bg-white/10 rounded-full border border-white/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        ))}
      </div>

      {/* Desktop View: Radial Orbit */}
      <div className="hidden lg:flex relative w-full min-h-[700px] items-center justify-center">
        
        {/* Outer Orbit Line */}
        <div className="absolute w-[560px] h-[560px] rounded-full border-[1px] border-dashed border-[#b28b4f]/40 animate-[spin_60s_linear_infinite]" />
        <div className="absolute w-[400px] h-[400px] rounded-full border-[1px] border-[#082b5f]/10" />

        {/* Orbit Nodes */}
        {services.map((service, index) => {
          const isActive = activeStep === index
          return (
            <button
              key={service.title}
              onClick={() => setActiveStep(index)}
              className={`absolute flex flex-col items-center justify-center transition-all duration-500 z-20 group outline-none`}
              style={{ transform: getTransform(index, services.length) }}
              aria-label={`View step: ${service.stepLabel}`}
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl shadow-xl transition-all duration-300 group-hover:scale-110 ${
                isActive ? 'bg-[#082b5f] text-white border-[4px] border-[#b28b4f] scale-110' : 'bg-white text-[#082b5f] border border-[#ebe5dc]'
              }`}>
                {service.icon}
              </div>
              <p className={`mt-3 font-semibold text-sm tracking-widest uppercase transition-colors ${
                isActive ? 'text-[#082b5f]' : 'text-[#7f8c9c]'
              }`}>
                {service.stepLabel}
              </p>
            </button>
          )
        })}

        {/* Center Content Panel */}
        <div className="absolute z-10 w-[340px] h-[340px] bg-white rounded-full shadow-[0_20px_50px_rgba(8,43,95,0.15)] flex items-center justify-center text-center p-10 border border-[#ebe5dc]">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center"
          >
            <span className="text-[#b28b4f] uppercase tracking-widest text-xs font-semibold mb-2">
              Phase 0{activeStep + 1}
            </span>
            <h3 className="text-2xl font-serif text-[#0d2345] mb-4 leading-tight">
              {activeService.title}
            </h3>
            <p className="text-sm text-[#5d6a80] leading-relaxed mb-6 line-clamp-3">
              {activeService.description}
            </p>
            <a href="#contact" className="px-6 py-2 bg-[#082b5f] text-white text-sm font-medium rounded-full hover:bg-[#b28b4f] transition-colors shadow-lg">
              Start This Step
            </a>
          </motion.div>
        </div>

      </div>
    </div>
  )
}
