import { writable, get, derived } from 'svelte/store'

/**
 * [ STATE ]
 */

/**
 * 컬럼의 데이터
 */
export const columns = writable([])
/**
 * 대시보드의 설정
 */
export const settings = writable({})
/**
 * Ticker 상태
 */
export const tickerStatus = writable('ready')

/**
 * [ DERIVED ]
 */



/**
 * [ FUNCTIONS ]
 */

