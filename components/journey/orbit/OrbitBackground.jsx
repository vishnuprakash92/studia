'use client'

import { motion } from 'framer-motion'

export default function OrbitBackground({ radius }) {
  // Convert radius to full diameter for the SVG box
  const size = radius * 2

  // Animate the path drawing to show progression direction
  const pathVariants = {
    hidden: { pathLength: 0 },
    visible: { 
      pathLength: 1, 
      transition: { duration: 2.5, ease: 'easeOut', delay: 0.2 } 
    }
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {/* Subtle outer glow to soften the geometry */}
      <div 
        className="absolute rounded-full bg-[#082b5f]/[0.02]" 
        style={{ width: size + 80, height: size + 80 }} 
      />

      <svg 
        width={size} 
        height={size} 
        viewBox={`0 0 ${size} ${size}`} 
        className="absolute -rotate-90" // Rotate so 0 degrees is top
      >
        {/* Solid Subtle Inner Ring */}
        <circle 
          cx={radius} 
          cy={radius} 
          r={radius} 
          fill="none" 
          stroke="#ebe5dc" 
          strokeWidth="1" 
        />

        {/* Animated Directional Route (Dashed) */}
        <motion.circle 
          cx={radius} 
          cy={radius} 
          r={radius} 
          fill="none" 
          stroke="#b28b4f" 
          strokeWidth="2" 
          strokeDasharray="6 6"
          variants={pathVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />
        
        {/* Animated glowing path tracing the route */}
        <motion.circle 
          cx={radius} 
          cy={radius} 
          r={radius} 
          fill="none" 
          stroke="url(#glowGradient)" 
          strokeWidth="4" 
          strokeLinecap="round"
          variants={pathVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="opacity-50 blur-[2px]"
        />

        <defs>
          <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#082b5f" stopOpacity="0" />
            <stop offset="100%" stopColor="#b28b4f" stopOpacity="1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
