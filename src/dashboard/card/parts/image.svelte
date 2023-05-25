<figure class="image">
  <img
    src={src}
    draggable="false"
    alt=""
    style:--color-hue={`${colors.hue}deg`}
    style:--color-brightness={`${colors.brightness}%`}
    style:--color-saturate={`${colors.saturate * 100}%`}
    style:--color-alpha={colors.alpha * .01}/>
</figure>

<script>
import { randomSelectItemFromArray, getValue, randomNumber } from '~/libs/util.js'
import * as thumbnailImages from '~/assets/images/thumbnail/index.js'
import { preference } from '~/store/preference.js'

const srcList = [
  thumbnailImages.image001, thumbnailImages.image002, thumbnailImages.image003, thumbnailImages.image004,
  thumbnailImages.image005, thumbnailImages.image006, thumbnailImages.image007, thumbnailImages.image008,
  thumbnailImages.image009, thumbnailImages.image010, thumbnailImages.image011, thumbnailImages.image012,
  thumbnailImages.image013, thumbnailImages.image014, thumbnailImages.image015, thumbnailImages.image016,
  thumbnailImages.image017, thumbnailImages.image018, thumbnailImages.image019, thumbnailImages.image020,
]
let src = randomSelectItemFromArray(srcList)

$: colors = (() => {
  let hue, brightness, saturate
  let alpha = 100
  switch ($preference.thumbnailPreset)
  {
    case 'random':
      hue = randomNumber(1, 360)
      brightness = randomNumber(200, 300)
      saturate = randomNumber(8, 32)
      alpha = randomNumber(75, 100)
      break
    case 'aquamarine':
      hue = randomNumber(120, 132)
      brightness = randomNumber(220, 300)
      saturate = randomNumber(4, 12)
      break
    case 'blue-water':
      hue = randomNumber(132, 162)
      brightness = randomNumber(240, 320)
      saturate = randomNumber(8, 12)
      break
    case 'sea-blue':
      hue = randomNumber(146, 196)
      brightness = randomNumber(150, 260)
      saturate = randomNumber(10, 16)
      break
    case 'crimson':
      hue = randomNumber(300, 360)
      brightness = randomNumber(50, 100)
      saturate = randomNumber(10, 60)
      break
    case 'pink':
      hue = randomNumber(218, 295)
      brightness = randomNumber(50, 100)
      saturate = randomNumber(40, 60)
      break
    case 'grayscale-light':
      hue = 1
      brightness = randomNumber(320, 460)
      saturate = 0
      break
    case 'grayscale':
    default:
      hue = 1
      brightness = getValue([ 40, 160 ])
      saturate = 0
      break
  }
  return {
    hue,
    brightness,
    saturate,
    alpha,
  }
})()
</script>

<style lang="scss">
.image {
  margin: 0;
  width: var(--width, unset);
  height: var(--height, unset);
  grid-area: var(--area, auto);
  aspect-ratio: var(--ratio, unset);
  box-sizing: border-box;
  background: transparent;
  overflow: hidden;
  border-radius: 2px;
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: var(--fit, cover);
    image-rendering: auto;
    transform-style: preserve-3d;
    transform: translate3d(0,0,0);
    backface-visibility: hidden;
    filter:
      sepia(100%)
      hue-rotate(var(--color-hue))
      brightness(var(--color-brightness))
      saturate(var(--color-saturate));
    opacity: var(--color-alpha, 1);
  }
}
</style>
