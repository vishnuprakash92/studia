// Centralized Orbit Geometry Engine

export const ORBIT_RADIUS = 335 // Tightened radius for better visual cohesion
export const NODE_SIZE = 56 // 14rem/56px width/height for node container
export const LABEL_OFFSET = 55 // Distance from node center to label edge
export const ACTIVE_NODE_SCALE = 1.25

/**
 * Get exact x, y coordinates for a step along the orbit.
 * Starts from -90 degrees (top center) and moves clockwise.
 */
export function getOrbitPosition(stepIndex, totalSteps, radius = ORBIT_RADIUS) {
  const angleDeg = (stepIndex / totalSteps) * 360 - 90
  const angleRad = (angleDeg * Math.PI) / 180

  return {
    x: radius * Math.cos(angleRad),
    y: radius * Math.sin(angleRad),
    angleDeg,
    angleRad,
  }
}

/**
 * Calculates a precise SVG path (d attribute) for an arc starting at the top (-90deg)
 * and terminating exactly at the center of the target node.
 */
export function getArcPath(targetStep, totalSteps, radius = ORBIT_RADIUS) {
  const startAngle = -90 * (Math.PI / 180)
  
  // Get the exact angle of the target step
  const { angleRad } = getOrbitPosition(targetStep, totalSteps, radius)

  // Center of the SVG circle is at (radius, radius) because the SVG size is 2*radius 
  // and we translated the <g> tag by the padding (50, 50).
  const cx = radius
  const cy = radius

  // The mathematical start point of the arc (top center)
  const startX = cx + radius * Math.cos(startAngle)
  const startY = cy + radius * Math.sin(startAngle)

  // The mathematical end point of the arc (center of active node)
  const endX = cx + radius * Math.cos(angleRad)
  const endY = cy + radius * Math.sin(angleRad)

  // Special case: If target is 0, the arc length is 0. 
  // We just return a tiny dot or empty path to prevent SVG rendering artifacts.
  if (targetStep === 0) {
    return `M ${startX} ${startY} L ${startX} ${startY + 0.1}`
  }

  // Large-arc flag determines if the arc should be drawn over > 180 degrees
  const angleDiff = (targetStep / totalSteps) * 360
  const largeArcFlag = angleDiff > 180 ? 1 : 0

  return `M ${startX} ${startY} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY}`
}

/**
 * Get CSS transform strings for labels to maintain perfect radial distance
 * from the outer edge of the orbit node.
 */
export function getLabelTransform(angleDeg, nodeScale = 1) {
  // If we want the label to push radially outward from the center of the node
  // We apply a rotation, a translation outward, and a counter-rotation to keep the text flat.
  
  const distance = (NODE_SIZE / 2) * nodeScale + LABEL_OFFSET

  // CSS transforms apply right-to-left
  return `rotate(${angleDeg}deg) translate(${distance}px) rotate(${-angleDeg}deg)`
}
