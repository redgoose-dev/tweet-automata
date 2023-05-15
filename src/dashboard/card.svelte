<div
  bind:this={__root}
  class="card"
  data-idx={data.key}
  data-pattern={data.pattern}
  class:open={open}>
  <div class="card__wrap">
    <div class="card__body">
      <svelte:component
        this={cardPattern.components[data.pattern]}/>
    </div>
  </div>
</div>

<script>
import { onMount, tick } from 'svelte'
import { sleep } from '~/libs/util.js'
import * as cardPattern from '~/dashboard/card/pattern/index.js'

let __root
export let data
let open = false

onMount(async () => {
  await tick()
  await sleep(20)
  open = true
})
</script>

<style src="./card.scss" lang="scss"></style>
