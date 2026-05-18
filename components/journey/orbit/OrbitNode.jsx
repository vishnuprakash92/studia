'use client'

import { motion } from 'framer-motion'
import { getOrbitPosition, getLabelTransform, NODE_SIZE, ACTIVE_NODE_SCALE } from '../../../lib/orbitGeometry'

export default function OrbitNode({ 
  service, 
  index, 
  totalNodes, 
  radius, 
  isActive, 
  onClick 
}) {
  // Use Central Geometry Engine
  const { x, y, angleDeg } = getOrbitPosition(index, totalNodes, radius)

  // Use Central Geometry Engine for Labels
  const labelTransform = getLabelTransform(angleDeg, isActive ? ACTIVE_NODE_SCALE : 1)

  return (
    <div
      className={`absolute z-20 ${isActive ? 'z-30' : ''}`}
      style={{
        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y}px)`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <motion.button
        onClick={onClick}
        className="flex items-center justify-center outline-none group origin-center relative"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1, type: 'spring', stiffness: 200 }}
        aria-label={`View step: ${service.stepLabel}`}
        aria-current={isActive ? 'step' : undefined}
      >
        {/* Active Pulse Animation - Diffuse Atmospheric Energy */}
        {isActive && (
          <motion.div 
            className="absolute inset-[-10px] rounded-full bg-[#b28b4f] blur-md origin-center -z-10"
            animate={{ scale: [1, 1.4], opacity: [0.5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        )}

        {/* Interactive Node (Strict height/width to match NODE_SIZE) */}
        <div 
          className={`relative rounded-full flex items-center justify-center text-xl transition-all duration-500 shadow-lg origin-center`}
          style={{ width: `${NODE_SIZE}px`, height: `${NODE_SIZE}px`, transform: `scale(${isActive ? ACTIVE_NODE_SCALE : 1})` }}
        >
          {/* Node Background & Border */}
          <div className={`absolute inset-0 rounded-full transition-all duration-500 ${
            isActive 
              ? 'bg-[#082b5f] border-[3px] border-[#b28b4f] shadow-[0_0_20px_rgba(178,139,79,0.4)]' 
              : 'bg-white border-2 border-[#ebe5dc] group-hover:border-[#b28b4f] group-hover:shadow-xl opacity-80 group-hover:opacity-100'
          }`} />

          {/* Node Icon */}
          <span className={`relative z-10 transition-colors duration-500 ${isActive ? 'text-white' : 'text-[#082b5f]'}`}>
            {service.icon}
          </span>

          {/* Subtle hover glow for inactive nodes */}
          {!isActive && (
            <div className="absolute inset-0 rounded-full bg-[#b28b4f] opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
          )}
        </div>

        {/* Math-Driven Radial Label - Softened & Integrated */}
        <div 
          className={`absolute pointer-events-none transition-all duration-500 flex flex-col items-center z-40 bg-white/40 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20 shadow-sm ${
            isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
          }`}
          style={{
            transform: `translate(-50%, -50%) ${labelTransform}`,
            width: 'max-content'
          }}
        >
          <p className={`font-bold text-[10px] tracking-widest uppercase transition-colors mb-0.5 ${
            isActive ? 'text-[#b28b4f]' : 'text-[#7f8c9c]'
          }`}>
            Step 0{index + 1}
          </p>
          <p className={`font-serif text-sm transition-colors ${
            isActive ? 'text-[#0d2345]' : 'text-[#5d6a80]'
          }`}>
            {service.stepLabel}
          </p>
        </div>

      </motion.button>
    </div>
  )
}
