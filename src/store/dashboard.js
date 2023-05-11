import { writable, get, derived } from 'svelte/store'

/**
 * [ STATE ]
 */

/**
 * 컬럼의 데이터
 */
export const columns = writable([1,2,3,4])
/**
 * 대시보드의 설정
 */
export const settings = writable({
  theme: 'system',
})


/**
 * [ DERIVED ]
 */



/**
 * [ FUNCTIONS ]
 */


