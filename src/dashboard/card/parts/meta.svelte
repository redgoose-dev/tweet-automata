<div bind:this={__root} class="meta">
  {shuffle ? '' : text}
</div>

<script>
import { onMount } from 'svelte'
import { sleep, randomDate, randomSelectItemFromArray } from '~/libs/util.js'
import shuffleFunc from '~/libs/shuffle.js'
import word from '~/assets/keywords/word.json'

export let shuffle = false
let __root
const text = (() => {
  let date = new Intl.DateTimeFormat('fr-CA', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(randomDate())
  let name = randomSelectItemFromArray(word)
  return `${date}, ${name}`
})()

onMount(async () => {
  if (!(__root && shuffle)) return
  await sleep(800)
  shuffleFunc(__root, {
    text: text,
    randomTextType: 'pattern',
    fps: 30,
  })
})
</script>

<style lang="scss">
.meta {
  display: flex;
  align-items: center;
  margin: 0;
  grid-area: var(--area, auto);
  box-sizing: border-box;
  font-size: 10px;
  color: hsl(0 0% 65%);
}
</style>
