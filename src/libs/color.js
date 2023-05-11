/**
 * model to hsla
 * @param {number} model.h
 * @param {number} model.s
 * @param {number} model.l
 * @param {number} model.a
 * @return {string}
 */
export function modelToHsla(model)
{
  return `hsl(${model.h || 0} ${model.s || 0}% ${model.l || 0}% / ${model.a || 0}%)`
}

/**
 * random hsl
 * @return {string}
 */
export function randomHsl()
{
  return modelToHsla({
    h: (Math.floor(Math.random() * 360)) + 1,
    s: (Math.floor(Math.random() * 100)) + 1,
    l: (Math.floor(Math.random() * 100)) + 1,
    a: 100,
  })
}
