'use client'

import { motion } from 'framer-motion'

export default function OrbitNode({ 
  service, 
  index, 
  totalNodes, 
  radius, 
  isActive, 
  onClick 
}) {
  // Calculate position precisely
  // Start at -90 degrees (top center) and move clockwise
  const angleDeg = (index / totalNodes) * 360 - 90
  const angleRad = (angleDeg * Math.PI) / 180

  const x = radius * Math.cos(angleRad)
  const y = radius * Math.sin(angleRad)

  // Counter-rotate the node container itself so it stays perfectly upright
  // even if the parent container is spinning.
  // Actually, we are rotating the background, not the nodes container, so nodes are static.

  // Label Positioning Logic: Prevent labels from crossing the orbit path or hitting the center card
  let labelPosClass = ''
  if (angleDeg === -90) labelPosClass = 'bottom-[110%] left-1/2 -translate-x-1/2 mb-2' // Top
  else if (angleDeg === 90) labelPosClass = 'top-[110%] left-1/2 -translate-x-1/2 mt-2' // Bottom
  else if (angleDeg > -90 && angleDeg < 90) labelPosClass = 'left-[110%] top-1/2 -translate-y-1/2 text-left ml-2' // Right side
  else labelPosClass = 'right-[110%] top-1/2 -translate-y-1/2 text-right mr-2' // Left side

  return (
    <motion.button
      onClick={onClick}
      className={`absolute flex items-center justify-center outline-none group z-20 ${isActive ? 'z-30' : ''}`}
      style={{
        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y}px)`,
        transform: 'translate(-50%, -50%)',
      }}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, type: 'spring', stiffness: 200 }}
      aria-label={`View step: ${service.stepLabel}`}
      aria-current={isActive ? 'step' : undefined}
    >
      {/* Active Pulse Animation */}
      {isActive && (
        <motion.div 
          className="absolute inset-0 rounded-full border-2 border-[#b28b4f]"
          animate={{ scale: [1, 1.8], opacity: [0.8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        />
      )}

      {/* Interactive Node */}
      <div 
        className={`relative w-14 h-14 rounded-full flex items-center justify-center text-xl transition-all duration-500 shadow-lg ${
          isActive 
            ? 'bg-[#082b5f] text-white ring-2 ring-[#b28b4f] ring-offset-4 ring-offset-[#f7f7f5] scale-125 shadow-[0_10px_25px_rgba(8,43,95,0.3)]' 
            : 'bg-white text-[#082b5f] border-2 border-[#ebe5dc] hover:scale-110 hover:border-[#b28b4f] hover:shadow-xl opacity-70 hover:opacity-100'
        }`}
      >
        {service.icon}

        {/* Subtle hover glow for inactive nodes */}
        {!isActive && (
          <div className="absolute inset-0 rounded-full bg-[#b28b4f] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
        )}
      </div>

      {/* Glassmorphic Label closer to node */}
      <div className={`absolute w-max pointer-events-none transition-all duration-300 bg-white/70 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/50 shadow-sm ${labelPosClass} ${
        isActive ? 'scale-110 opacity-100' : 'opacity-80 group-hover:opacity-100 group-hover:scale-105'
      }`}>
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
  )
}
