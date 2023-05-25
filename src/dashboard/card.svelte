<div
  bind:this={__root}
  class="card"
  data-idx={data.key}
  data-pattern={data.pattern}
  class:open={open}
  style:--card-speed={`${speed}ms`}>
  <div class="card__wrap">
    <div class="card__body">
      <svelte:component
        this={cardPattern.components[data.pattern]}
        shuffle={shuffle}/>
    </div>
  </div>
</div>

<script>
import { onMount, tick } from 'svelte'
import { sleep, randomNumber, randomSelectItemFromArray } from '~/libs/util.js'
import { preference } from '~/store/preference.js'
import * as cardPattern from '~/dashboard/card/pattern/index.js'

let __root
export let data
let open = false
let speed = (() => randomSelectItemFromArray($preference.cardAnimationSpeed))()
let shuffle = (() => {
  if (!$preference.shuffleText) return false
  return randomSelectItemFromArray([ true, false, false, false, false ])
})()

onMount(async () => {
  await tick()
  await sleep(10)
  open = true
})
</script>

<style src="./card.scss" lang="scss"></style>
