'use client'

import { motion, AnimatePresence } from 'framer-motion'

export default function OrbitCenterCard({ activeService, activeStep }) {
  return (
    <div className="absolute z-10 w-[420px] h-[420px] bg-white/95 backdrop-blur-md rounded-full shadow-[0_30px_60px_rgba(8,43,95,0.08)] flex flex-col items-center justify-center text-center p-14 border border-white/50">
      
      {/* Blend card smoothly into the orbit */}
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,1)_60%,rgba(247,247,245,0.4)_100%)] pointer-events-none" />

      <AnimatePresence mode="wait">
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 15, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -15, scale: 0.98 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="relative z-10 flex flex-col items-center w-full"
        >
          {/* Premium Editorial Phase Badge */}
          <span className="text-[#b28b4f] uppercase tracking-[0.25em] text-[10px] font-bold mb-4">
            Phase 0{activeStep + 1}
          </span>

          {/* Large Editorial Title */}
          <h3 className="text-3xl md:text-4xl font-serif text-[#0d2345] mb-5 leading-[1.15] max-w-[280px]">
            {activeService.title}
          </h3>

          {/* Airy Description */}
          <p className="text-sm text-[#5d6a80] leading-[1.8] mb-8 max-w-[300px]">
            {activeService.supportDescription}
          </p>

          {/* Elegant Bulleted Tags (No heavy pills) */}
          <div className="flex flex-wrap justify-center gap-x-2 gap-y-1 mb-8 max-w-[280px]">
            {activeService.tags.slice(0, 3).map((tag, i) => (
              <span key={tag} className="text-[11px] text-[#4d5b72] font-medium tracking-wide">
                {tag} {i < 2 && <span className="text-[#d8c9b4] ml-2">•</span>}
              </span>
            ))}
          </div>

          {/* Isolated CTA */}
          <a 
            href="#contact" 
            className="group relative inline-flex items-center gap-2 px-8 py-3 bg-[#082b5f] text-white text-xs tracking-wider uppercase font-semibold rounded-full overflow-hidden transition-all shadow-[0_10px_20px_rgba(8,43,95,0.2)] hover:shadow-[0_15px_30px_rgba(8,43,95,0.3)] hover:-translate-y-0.5"
          >
            <span className="relative z-10">Start This Phase</span>
            <div className="absolute inset-0 bg-[#b28b4f] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
          </a>

        </motion.div>
      </AnimatePresence>
    </div>
  )
}
