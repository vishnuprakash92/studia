'use client'

import { motion, AnimatePresence } from 'framer-motion'

export default function OrbitCenterCard({ activeService, activeStep }) {
  return (
    <div className="absolute z-10 w-[380px] h-[380px] bg-white/95 backdrop-blur-md rounded-full shadow-[0_20px_50px_rgba(8,43,95,0.12)] flex flex-col items-center justify-center text-center p-12 border border-[#ebe5dc] ring-8 ring-white/50">
      
      {/* Soft internal glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#f7f7f5] to-transparent pointer-events-none" />

      <AnimatePresence mode="wait">
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 15, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -15, scale: 0.95 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="relative z-10 flex flex-col items-center w-full"
        >
          {/* Phase Badge */}
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#f7f7f5] border border-[#d8c9b4] mb-5">
            <span className="text-[#b28b4f] uppercase tracking-widest text-[10px] font-bold">
              Phase 0{activeStep + 1}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-2xl font-serif text-[#0d2345] mb-4 leading-tight">
            {activeService.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-[#5d6a80] leading-relaxed mb-6 line-clamp-3">
            {activeService.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {activeService.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="text-[10px] px-2 py-1 bg-white border border-[#ece7df] text-[#4d5b72] rounded-full uppercase tracking-wider font-semibold">
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <a 
            href="#contact" 
            className="group relative inline-flex items-center gap-2 px-6 py-2.5 bg-[#082b5f] text-white text-sm font-medium rounded-full overflow-hidden transition-all shadow-md hover:shadow-lg"
          >
            <span className="relative z-10">Start This Step</span>
            <div className="absolute inset-0 bg-[#b28b4f] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
          </a>

        </motion.div>
      </AnimatePresence>
    </div>
  )
}
