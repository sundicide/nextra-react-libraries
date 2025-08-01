import { BLUES, GOLDS, ALL_COLORS } from './colorData'

/**
 * Get a specific color by type and variant
 * @param {string} type - 'BLUES' or 'GOLDS'
 * @param {string} variant - 'ORIGINAL', 'LIGHT_80', 'LIGHT_60', 'LIGHT_40', 'DARK_20', 'DARK_40'
 * @returns {object|null} Color object or null if not found
 */
export function getColor(type, variant) {
  const colorSet = ALL_COLORS[type.toUpperCase()]
  if (!colorSet) return null

  return colorSet[variant.toUpperCase()] || null
}

/**
 * Get all colors of a specific type
 * @param {string} type - 'BLUES' or 'GOLDS'
 * @returns {object|null} Object containing all variants of the color type
 */
export function getColorSet(type) {
  return ALL_COLORS[type.toUpperCase()] || null
}

/**
 * Get all available color types
 * @returns {string[]} Array of available color types
 */
export function getAvailableColorTypes() {
  return Object.keys(ALL_COLORS)
}

/**
 * Get all variants for a specific color type
 * @param {string} type - 'BLUES' or 'GOLDS'
 * @returns {string[]} Array of available variants
 */
export function getColorVariants(type) {
  const colorSet = getColorSet(type)
  return colorSet ? Object.keys(colorSet) : []
}

/**
 * Get a random color from the palette
 * @returns {object} Random color object
 */
export function getRandomColor() {
  const types = getAvailableColorTypes()
  const randomType = types[Math.floor(Math.random() * types.length)]
  const variants = getColorVariants(randomType)
  const randomVariant = variants[Math.floor(Math.random() * variants.length)]

  return getColor(randomType, randomVariant)
}

/**
 * Get colors that match a specific criteria
 * @param {function} filterFn - Function to filter colors
 * @returns {object[]} Array of matching colors
 */
export function getColorsByFilter(filterFn) {
  const results = []

  Object.entries(ALL_COLORS).forEach(([type, variants]) => {
    Object.entries(variants).forEach(([variant, color]) => {
      if (filterFn(color, type, variant)) {
        results.push({ ...color, type, variant })
      }
    })
  })

  return results
}

/**
 * Get light colors (LIGHT variants)
 * @returns {object[]} Array of light colors
 */
export function getLightColors() {
  return getColorsByFilter((color, type, variant) =>
    variant.includes('LIGHT')
  )
}

/**
 * Get dark colors (DARK variants)
 * @returns {object[]} Array of dark colors
 */
export function getDarkColors() {
  return getColorsByFilter((color, type, variant) =>
    variant.includes('DARK')
  )
}

/**
 * Get original colors (ORIGINAL variant)
 * @returns {object[]} Array of original colors
 */
export function getOriginalColors() {
  return getColorsByFilter((color, type, variant) =>
    variant === 'ORIGINAL'
  )
}

// Export the main color data for convenience
export { BLUES, GOLDS, ALL_COLORS }