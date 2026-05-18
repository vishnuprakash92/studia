'use client'

import { motion, useScroll, useSpring } from 'framer-motion'
import { useRef } from 'react'

export default function JourneyCurvedRoadmap({ services }) {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  })

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <div ref={containerRef} className="max-w-5xl mx-auto relative mt-16 px-4">
      {/* Travel Path Line */}
      <div className="absolute left-1/2 top-8 bottom-8 w-1 -translate-x-1/2 overflow-hidden hidden lg:block">
        {/* Background dotted line */}
        <div className="absolute inset-0 border-l-[3px] border-dashed border-[#d8c9b4] opacity-50" />
        {/* Animated solid line */}
        <motion.div 
          className="absolute top-0 left-0 w-full bg-[#082b5f] origin-top"
          style={{ scaleY, height: '100%' }}
        />
      </div>

      <div className="space-y-16 lg:space-y-24">
        {services.map((service, index) => {
          const isLeft = index % 2 === 0
          
          return (
            <div key={service.title} className="relative flex flex-col lg:flex-row items-center justify-between gap-8 group">
              
              {/* Airplane/Node Marker (Desktop) */}
              <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white border-[3px] border-[#082b5f] rounded-full items-center justify-center z-10 shadow-[0_0_20px_rgba(8,43,95,0.2)]">
                <span className="text-xl">{service.icon}</span>
              </div>

              {/* Content Card */}
              <motion.div 
                initial={{ opacity: 0, x: isLeft ? -50 : 50, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className={`w-full lg:w-[45%] relative ${isLeft ? 'lg:text-right' : 'lg:order-last'}`}
              >
                <div className="bg-white p-8 rounded-[2rem] border border-[#ebe5dc] shadow-xl hover:-translate-y-2 transition-transform duration-500 relative z-20">
                  <p className="text-[#b28b4f] uppercase tracking-widest text-xs font-semibold mb-3">
                    Destination {index + 1} • {service.stepLabel}
                  </p>
                  <h4 className="text-3xl font-serif text-[#0d2345] mb-4 leading-tight">
                    {service.title}
                  </h4>
                  <p className="text-[#5d6a80] leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  <div className={`flex flex-wrap gap-2 ${isLeft ? 'lg:justify-end' : 'justify-start'}`}>
                    {service.tags.map(tag => (
                      <span key={tag} className="text-xs px-3 py-1 bg-[#f7f7f5] text-[#4d5b72] rounded-full border border-[#ece7df]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Connecting Curved Line (Decorative) */}
                <svg className={`absolute top-1/2 -z-10 hidden lg:block ${isLeft ? 'right-[-20%] w-[20%]' : 'left-[-20%] w-[20%]'}`} height="2" viewBox="0 0 100 2" preserveAspectRatio="none">
                  <path d="M0 1 L100 1" stroke="#d8c9b4" strokeWidth="2" strokeDasharray="4 4" fill="none" />
                </svg>
              </motion.div>

              {/* Spacer for the opposite side */}
              <div className="hidden lg:block w-[45%]" />

            </div>
          )
        })}
      </div>
    </div>
  )
}
