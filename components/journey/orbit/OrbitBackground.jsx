'use client'

import { motion } from 'framer-motion'
import { getArcPath } from '../../../lib/orbitGeometry'

export default function OrbitBackground({ radius, activeStep, totalSteps }) {
  // Convert radius to full diameter for the SVG box
  const size = radius * 2

  // Generate the exact SVG path `d` string that stops at the center of the active node.
  const progressiveArcPath = getArcPath(activeStep, totalSteps, radius)

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
      {/* Subtle outer glow to soften the geometry */}
      <div 
        className="absolute rounded-full bg-[#082b5f]/[0.02]" 
        style={{ width: size + 80, height: size + 80 }} 
      />

      <motion.svg 
        width={size + 100} 
        height={size + 100} 
        viewBox={`0 0 ${size + 100} ${size + 100}`} 
        className="absolute" 
        // Ultra-slow continuous rotation for the *background grid only*
        animate={{ rotate: 360 }}
        transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
      >
        {/* We place the visual elements at (50, 50) since we padded the viewBox by 100 */}
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
        </g>
      </motion.svg>

      {/* STATIC SVG for the primary orbit ring and progress arc. 
          This must NOT rotate so the math stays perfectly aligned with the DOM nodes. */}
      <svg 
        width={size + 100} 
        height={size + 100} 
        viewBox={`0 0 ${size + 100} ${size + 100}`} 
        className="absolute z-0 overflow-visible" 
      >
        <g transform={`translate(50, 50)`}>
          {/* Layer 1: Atmospheric Glow Ring (Depth layer beneath the base) */}
          <circle 
            cx={radius} 
            cy={radius} 
            r={radius} 
            fill="none" 
            stroke="#b28b4f" 
            strokeWidth="4" 
            className="opacity-40 blur-[6px]"
          />

          {/* Layer 2: Solid Subtle Inner Base Ring (Structural Spine) */}
          <circle 
            cx={radius} 
            cy={radius} 
            r={radius} 
            fill="none" 
            stroke="#ebe5dc" 
            strokeWidth="2" 
          />
          
          {/* --- LAYER 3: PROGRESSIVE GLOW ARC --- */}
          {activeStep >= 0 && (
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* The base gold active arc */}
              <motion.path 
                d={progressiveArcPath}
                fill="none" 
                stroke="#b28b4f" 
                strokeWidth="4" 
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
              
              {/* The outer blur glow of the active arc */}
              <motion.path 
                d={progressiveArcPath}
                fill="none" 
                stroke="url(#glowGradient)" 
                strokeWidth="10" 
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="opacity-70 blur-[4px]"
              />
            </motion.g>
          )}

          <defs>
            <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#082b5f" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#b28b4f" stopOpacity="1" />
            </linearGradient>
          </defs>
        </g>
      </svg>
    </div>
  )
}
