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

  // Label Positioning Logic: Prevent labels from crossing the orbit path or hitting the center card
  // If the node is on the right, label goes right. Left, goes left. Top goes up. Bottom goes down.
  let labelPosClass = ''
  if (angleDeg === -90) labelPosClass = 'bottom-full mb-4 left-1/2 -translate-x-1/2' // Top
  else if (angleDeg === 90) labelPosClass = 'top-full mt-4 left-1/2 -translate-x-1/2' // Bottom
  else if (angleDeg > -90 && angleDeg < 90) labelPosClass = 'left-full ml-4 top-1/2 -translate-y-1/2 text-left' // Right side
  else labelPosClass = 'right-full mr-4 top-1/2 -translate-y-1/2 text-right' // Left side

  return (
    <motion.button
      onClick={onClick}
      className="absolute flex items-center justify-center outline-none group z-20"
      style={{
        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y}px)`,
        // Offset the width/height of the node itself to perfectly center it on the coordinates
        transform: 'translate(-50%, -50%)',
      }}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, type: 'spring', stiffness: 200 }}
      aria-label={`View step: ${service.stepLabel}`}
      aria-current={isActive ? 'step' : undefined}
    >
      {/* Interactive Node */}
      <div 
        className={`relative w-16 h-16 rounded-full flex items-center justify-center text-2xl transition-all duration-500 shadow-lg ${
          isActive 
            ? 'bg-[#082b5f] text-white ring-4 ring-[#b28b4f] ring-offset-4 ring-offset-[#f7f7f5] scale-110 shadow-[#082b5f]/20' 
            : 'bg-white text-[#082b5f] border-2 border-[#ebe5dc] hover:scale-110 hover:border-[#b28b4f] hover:shadow-xl'
        }`}
      >
        {service.icon}

        {/* Subtle hover glow for inactive nodes */}
        {!isActive && (
          <div className="absolute inset-0 rounded-full bg-[#b28b4f] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
        )}
      </div>

      {/* Outward facing label */}
      <div className={`absolute w-max pointer-events-none transition-all duration-300 ${labelPosClass}`}>
        <p className={`font-semibold text-xs tracking-widest uppercase transition-colors ${
          isActive ? 'text-[#082b5f]' : 'text-[#7f8c9c] group-hover:text-[#b28b4f]'
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
