'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import OrbitBackground from './orbit/OrbitBackground'
import OrbitCenterCard from './orbit/OrbitCenterCard'
import OrbitNode from './orbit/OrbitNode'

export default function JourneyCircularFlow({ services }) {
  const [activeStep, setActiveStep] = useState(0)

  // Desktop Orbit Radius Configuration
  const ORBIT_RADIUS = 340 // pixels. Provides ample room for a 380px center card

  return (
    <div className="max-w-7xl mx-auto mt-16 px-4">
      {/* Mobile/Tablet View: Premium Interactive Accordion */}
      <div className="lg:hidden space-y-4 max-w-2xl mx-auto">
        {services.map((service, index) => (
          <div 
            key={service.title} 
            className={`border rounded-[1.5rem] transition-colors duration-300 shadow-sm ${
              activeStep === index ? 'bg-[#082b5f] text-white border-[#082b5f] shadow-lg' : 'bg-white border-[#ebe5dc]'
            }`}
          >
            <button
              onClick={() => setActiveStep(index)}
              className="w-full text-left p-6 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <span className={`w-12 h-12 flex items-center justify-center rounded-full text-xl ${
                  activeStep === index ? 'bg-white/10' : 'bg-[#f7f7f5]'
                }`}>
                  {service.icon}
                </span>
                <div>
                  <p className={`text-[10px] uppercase tracking-widest font-bold mb-1 ${
                    activeStep === index ? 'text-[#d6b37a]' : 'text-[#7f8c9c]'
                  }`}>
                    Step 0{index + 1}
                  </p>
                  <span className="font-serif text-xl leading-tight block">{service.stepLabel}</span>
                </div>
              </div>
              <span className={`text-2xl font-light ${activeStep === index ? 'text-[#d6b37a]' : 'text-[#082b5f]'}`}>
                {activeStep === index ? '−' : '+'}
              </span>
            </button>
            
            {activeStep === index && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="px-6 pb-8 overflow-hidden"
              >
                <div className="pt-2 border-t border-white/10">
                  <h4 className="text-xl font-serif mb-3 mt-4 text-white">{service.title}</h4>
                  <p className="opacity-80 leading-relaxed text-sm mb-6">{service.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.tags.map(tag => (
                      <span key={tag} className="text-[10px] px-3 py-1.5 bg-white/10 rounded-full border border-white/20 uppercase tracking-widest font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a href="#contact" className="inline-flex w-full justify-center px-6 py-3 bg-[#b28b4f] text-white text-sm font-semibold rounded-xl hover:bg-[#d6b37a] transition-colors">
                    Start This Step
                  </a>
                </div>
              </motion.div>
            )}
          </div>
        ))}
      </div>

      {/* Desktop View: Premium Modular Orbit System */}
      <div className="hidden lg:flex relative w-full h-[850px] items-center justify-center">
        
        {/* Abstracted SVG Geometry Layer */}
        <OrbitBackground radius={ORBIT_RADIUS} />

        {/* Central Focal Point */}
        <OrbitCenterCard 
          activeService={services[activeStep]} 
          activeStep={activeStep} 
        />

        {/* Mathematical Orbit Nodes */}
        {services.map((service, index) => (
          <OrbitNode
            key={service.title}
            service={service}
            index={index}
            totalNodes={services.length}
            radius={ORBIT_RADIUS}
            isActive={activeStep === index}
            onClick={() => setActiveStep(index)}
          />
        ))}

      </div>
    </div>
  )
}
