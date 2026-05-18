'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import OrbitBackground from './orbit/OrbitBackground'
import OrbitCenterCard from './orbit/OrbitCenterCard'
import OrbitNode from './orbit/OrbitNode'

export default function JourneyCircularFlow({ services }) {
  const [activeStep, setActiveStep] = useState(0)

  // Desktop Orbit Radius Configuration
  const ORBIT_RADIUS = 360 // Increased to give the 420px center card ample room

  return (
    <div className="max-w-7xl mx-auto mt-8 px-4">
      
      {/* Tablet & Mobile View: Premium Stacked Timeline */}
      <div className="xl:hidden relative py-10">
        {/* Glowing Vertical Track */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#ebe5dc] to-transparent" />
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#b28b4f] to-transparent opacity-30 blur-[2px]" />

        <div className="space-y-12">
          {services.map((service, index) => {
            const isLeft = index % 2 === 0
            
            return (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8 group"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 top-6 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 w-12 h-12 bg-white rounded-full border-2 border-[#b28b4f] flex items-center justify-center text-xl shadow-lg z-10">
                  {service.icon}
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-[45%] pl-16 md:pl-0 ${isLeft ? 'md:text-right' : 'md:order-last'}`}>
                  <div className="bg-white p-8 rounded-3xl border border-[#ebe5dc] shadow-sm hover:shadow-xl transition-all duration-500 relative z-20 group-hover:-translate-y-1">
                    <p className="text-[#b28b4f] uppercase tracking-widest text-[10px] font-bold mb-3">
                      Step 0{index + 1} • {service.stepLabel}
                    </p>
                    <h4 className="text-2xl font-serif text-[#0d2345] mb-4 leading-tight">
                      {service.title}
                    </h4>
                    <p className="text-[#5d6a80] leading-relaxed mb-6 text-sm">
                      {service.description}
                    </p>
                    <div className={`flex flex-wrap gap-x-2 gap-y-1 ${isLeft ? 'md:justify-end' : 'justify-start'}`}>
                      {service.tags.map((tag, i) => (
                        <span key={tag} className="text-[11px] text-[#4d5b72] font-medium tracking-wide">
                          {tag} {i < service.tags.length - 1 && <span className="text-[#d8c9b4] ml-2">•</span>}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty space for opposite side on tablet */}
                <div className="hidden md:block w-[45%]" />
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Desktop View: Premium Modular Orbit Engine */}
      <div className="hidden xl:flex relative w-full h-[900px] items-center justify-center -mt-8">
        
        {/* Abstracted SVG Geometry Layer */}
        <OrbitBackground 
          radius={ORBIT_RADIUS} 
          activeStep={activeStep} 
          totalSteps={services.length} 
        />

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
