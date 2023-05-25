import { writable, get, derived } from 'svelte/store'
import { getValue, randomNumber, randomSelectItemFromArray, pureObject } from '~/libs/util.js'

/**
 * [ STATE ]
 */
export const preference = writable({
  padding: '32px',
  columnGap: '16px 16px',
  theme: 'system',
  limitCount: 0,
  loadingTime: 250, // ms
  cardAnimationSpeed: [ 280, 360, 420, 540 ], // ms
  cardPatternArea: [ 0, 0, 0, 1, 2, 3, 4, 5, 6, 6, 6 ],
  fps: [ .05, .075, .1, .25, 1, 2, 4 ],
  thumbnailPreset: 'grayscale', // grayscale,random,aquamarine,blue-water,sea-blue
  observer: {
    rootMargin: '0px 0px 160px 0px',
    threshold: undefined,
  },
  shuffleText: true,
})


/**
 * [ DERIVED ]
 */



/**
 * [ FUNCTIONS ]
 */

export function setupPreference(random = true)
{
  if (!random) return
  let pref = pureObject(get(preference))
  pref.padding = randomSelectItemFromArray([
    '8px', '8px',
    '16px', '16px',
    '24px', '24px',
    '32px',
  ])
  pref.columnGap = randomSelectItemFromArray([
    '4px 4px',
    '8px 8px', '8px 8px',
    '12px 12px', '12px 12px',
    '16px 16px',
  ])
  pref.thumbnailPreset = randomSelectItemFromArray([
    'grayscale',
    'grayscale',
    'grayscale-light',
    'grayscale-light',
    'random',
    'random',
    'random',
    'random',
    'random',
    'aquamarine',
    'blue-water',
    'sea-blue',
    'crimson',
    'pink',
  ])
  pref.cardAnimationSpeed = randomSelectItemFromArray([
    [ 280, 360, 420, 540 ],
    [ 240, 320, 360, 480, 640 ],
  ])
  pref.cardPatternArea = randomSelectItemFromArray([
    [ 0, 0, 0, 1, 2, 3, 4, 5, 6, 6, 6 ],
    [ 0, 0, 3, 4, 5, 6 ],
  ])
  pref.fps = randomSelectItemFromArray([
    [ .05, .075, .1, .25, 1, 2, 4 ],
    [ .05, .25, .5, 1, 8, 16 ],
    [ .5, 1, 4, 8, 12 ],
    [ .025, .05, .1, .5, .25, 4 ],
    [ 1, 2, 2, 4, 4, 8 ],
  ])
  preference.set(pref)
}
