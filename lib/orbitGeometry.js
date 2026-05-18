// Centralized Orbit Geometry Engine

export const ORBIT_RADIUS = 360 // Base radius for desktop
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

  // Start and End coordinates based on the center of the SVG (which is radius, radius since size is 2*radius)
  const startX = radius + radius * Math.cos(startAngle)
  const startY = radius + radius * Math.sin(startAngle)

  const endX = radius + radius * Math.cos(angleRad)
  const endY = radius + radius * Math.sin(angleRad)

  // Determine if the arc should be drawn using the large-arc flag (if angle is > 180 degrees)
  // Step 0 is 0 deg diff, Step 1 is 60, Step 2 is 120, Step 3 is 180, Step 4 is 240
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
