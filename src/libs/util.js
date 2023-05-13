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
