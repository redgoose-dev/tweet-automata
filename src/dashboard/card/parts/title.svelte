<h3 bind:this={__root} class="title">
  {shuffle ? '' : title}
</h3>

<script>
import { onMount } from 'svelte'
import { randomSelectItemFromArray } from '~/libs/util.js'
import shuffleFunc from '~/libs/shuffle.js'
import words from '~/assets/keywords/words.json'

let __root
export let shuffle = false
const title = randomSelectItemFromArray(words)

onMount(() => {
  if (!(__root && shuffle)) return
  shuffleFunc(__root, {
    text: title,
    randomTextType: 'pattern',
    fps: 30,
  })
})
</script>

<style lang="scss">
.title {
  margin: 2px 0 0;
  grid-area: var(--area, auto);
  font-size: 16px;
  font-weight: 600;
  line-height: 1.24;
  letter-spacing: -1px;
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
