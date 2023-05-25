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
 * random select item from array
 * @param {any[]} arr
 * @return {any}
 */
export function randomSelectItemFromArray(arr)
{
  const idx = Math.floor(Math.random() * arr.length)
  return arr[idx]
}

export function randomDate()
{
  const year = Math.floor(Math.random() * 500) + 1945;
  const month = Math.floor(Math.random() * 12) + 1;
  const day = Math.floor(Math.random() * 31) + 1;
  return new Date(year, month - 1, day);
}

/**
 * sleep (delay tool)
 *
 * @param {number} delay
 * @return {Promise}
 */
export function sleep(delay = 3000)
{
  return new Promise(resolve => setTimeout(resolve, delay))
}

/**
 * get screen mode
 * @return {number}
 */
export function getScreenMode()
{
  const width = window.innerWidth
  if (width > 1920)
  {
    return 1920
  }
  else if (width > 1600)
  {
    return 1600
  }
  else if (width > 1440)
  {
    return 1440
  }
  else if (width > 1024)
  {
    return 1024
  }
  else if (width > 768)
  {
    return 768
  }
  else
  {
    return 0
  }
}

/**
 * get value
 * @param {number|number[]} value
 * @return {number}
 */
export function getValue(value)
{
  if (Array.isArray(value) && value.length > 0)
  {
    return randomNumber(value[0], value[1])
  }
  else
  {
    return value
  }
}

export function pureObject(src)
{
  try
  {
    return JSON.parse(JSON.stringify(src))
  }
  catch(_)
  {
    return null
  }
}
