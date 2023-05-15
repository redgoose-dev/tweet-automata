/**
 * random number
 * @param {number} min
 * @param {number} max
 * @return {number}
 */
export function randomNumber(min, max)
{
  return Math.floor(Math.random() * (max - min + 1) + min)
}

/**
 * sleep (delay tool)
 *
 * @param {number} delay
 * @return {Promise}
 */
export const sleep = (delay = 3000) => {
  return new Promise(resolve => setTimeout(resolve, delay))
}
