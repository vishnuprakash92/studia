'use client'

import { motion } from 'framer-motion'

export default function OrbitBackground({ radius, activeStep, totalSteps }) {
  // Convert radius to full diameter for the SVG box
  const size = radius * 2

  // Progress arc calculations
  // Circumference of the circle = 2 * PI * r
  const circumference = 2 * Math.PI * radius
  
  // What fraction of the journey is complete? (E.g. Step 1 = 0%, Step 6 = 100%)
  const progressFraction = activeStep / (Math.max(1, totalSteps - 1))
  
  // Calculate dash offset to stroke the path from the top (-90deg)
  const strokeDashoffset = circumference - (progressFraction * circumference)

  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
      // Ultra-slow continuous rotation to make the system feel "alive"
      animate={{ rotate: 360 }}
      transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
    >
      {/* Subtle outer glow to soften the geometry */}
      <div 
        className="absolute rounded-full bg-[#082b5f]/[0.02]" 
        style={{ width: size + 80, height: size + 80 }} 
      />

      <svg 
        width={size + 100} 
        height={size + 100} 
        viewBox={`0 0 ${size + 100} ${size + 100}`} 
        className="absolute" 
      >
        <g transform={`translate(50, 50)`}>
          {/* --- NAVIGATIONAL GRID MOTIF --- */}
          
          {/* Crosshairs */}
          <line x1={radius} y1="-30" x2={radius} y2={size + 30} stroke="#ebe5dc" strokeWidth="1" strokeDasharray="4 8" className="opacity-50" />
          <line x1="-30" y1={radius} x2={size + 30} y2={radius} stroke="#ebe5dc" strokeWidth="1" strokeDasharray="4 8" className="opacity-50" />
          
          {/* Inner Radar Rings */}
          <circle cx={radius} cy={radius} r={radius * 0.6} fill="none" stroke="#ebe5dc" strokeWidth="1" className="opacity-40" />
          <circle cx={radius} cy={radius} r={radius * 0.8} fill="none" stroke="#ebe5dc" strokeWidth="1" className="opacity-30" />
          
          {/* Coordinate Ticks on Outer Orbit */}
          {Array.from({ length: 24 }).map((_, i) => {
            const angle = (i * 15 * Math.PI) / 180
            const x1 = radius + Math.cos(angle) * (radius - 5)
            const y1 = radius + Math.sin(angle) * (radius - 5)
            const x2 = radius + Math.cos(angle) * (radius + 5)
            const y2 = radius + Math.sin(angle) * (radius + 5)
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#ebe5dc" strokeWidth="1" />
          })}

          {/* --- MAIN ORBIT RINGS --- */}

          {/* Solid Subtle Inner Base Ring */}
          <circle 
            cx={radius} 
            cy={radius} 
            r={radius} 
            fill="none" 
            stroke="#ebe5dc" 
            strokeWidth="1.5" 
          />

          {/* Decorative Travel Route (Dashed Gold) - Muted */}
          <circle 
            cx={radius} 
            cy={radius} 
            r={radius} 
            fill="none" 
            stroke="#b28b4f" 
            strokeWidth="1.5" 
            strokeDasharray="4 12"
            className="opacity-30"
          />
          
          {/* --- PROGRESSIVE GLOW ARC --- */}
          {/* We rotate this group -90deg so the stroke starts exactly at the top (Step 01) */}
          <g transform={`rotate(-90 ${radius} ${radius})`}>
            {/* The base gold active arc */}
            <motion.circle 
              cx={radius} 
              cy={radius} 
              r={radius} 
              fill="none" 
              stroke="#b28b4f" 
              strokeWidth="3" 
              strokeLinecap="round"
              strokeDasharray={circumference}
              animate={{ strokeDashoffset }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
            
            {/* The outer blur glow of the active arc */}
            <motion.circle 
              cx={radius} 
              cy={radius} 
              r={radius} 
              fill="none" 
              stroke="url(#glowGradient)" 
              strokeWidth="8" 
              strokeLinecap="round"
              strokeDasharray={circumference}
              animate={{ strokeDashoffset }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="opacity-60 blur-[4px]"
            />
          </g>

          <defs>
            <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#082b5f" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#b28b4f" stopOpacity="1" />
            </linearGradient>
          </defs>
        </g>
      </svg>
    </motion.div>
  )
}
