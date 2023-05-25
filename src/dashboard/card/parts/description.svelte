<p bind:this={__root} class="description">
  {shuffle ? '' : text}
</p>

<script>
import { onMount } from 'svelte'
import { sleep, randomSelectItemFromArray } from '~/libs/util.js'
import shuffleFunc from '~/libs/shuffle.js'
import paragraph from '~/assets/keywords/paragraph.json'

export let shuffle = false
let __root
const text = (() => {
  let str = ''
  str += randomSelectItemFromArray(paragraph)
  str += randomSelectItemFromArray(paragraph)
  str += randomSelectItemFromArray(paragraph)
  return str
})()

onMount(async () => {
  if (!(__root && shuffle)) return
  await sleep(400)
  shuffleFunc(__root, {
    text: text,
    charSpeed: 2,
    fps: 40,
    randomTextType: 'pattern',
  })
})
</script>

<style lang="scss">
.description {
  --description-font-size: 12px;
  --description-line-height: 1.24;
  --description-line-count: 3;
  margin: 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: var(--description-line-count);
  grid-area: var(--area, auto);
  box-sizing: border-box;
  font-size: var(--description-font-size);
  line-height: var(--description-line-height);
  max-height: calc(var(--description-font-size) * var(--description-line-height) * var(--description-line-count));
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
