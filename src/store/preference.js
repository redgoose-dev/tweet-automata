import { writable, get, derived } from 'svelte/store'

/**
 * [ STATE ]
 */
export const preference = writable({
  columnGap: '8px 8px',
  theme: 'system',
  limitCount: 20,
})


/**
 * [ DERIVED ]
 */



/**
 * [ FUNCTIONS ]
 */



