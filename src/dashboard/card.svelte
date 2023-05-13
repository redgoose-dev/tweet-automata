<div
  bind:this={__root}
  class="card"
  data-idx={data.key}
  data-pattern={data.pattern}
  class:open={open}>
  <div class="card__wrap">
    <div class="card__body">
      <p>.card - {data.key} / {data.pattern}</p>
      <p>{JSON.stringify(presets[data.pattern])}</p>
    </div>
  </div>
</div>

<script>
import { onMount, tick } from 'svelte'
import { presets } from '~/libs/pattern.js'

let __root
export let data
// console.log(data)
let open = false

onMount(async () => {
  await tick()
  setTimeout(() => {
    open = true
  }, 30)
})
</script>

<style src="./card.scss" lang="scss"></style>
