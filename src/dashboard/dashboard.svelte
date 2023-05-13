{#if $columns.length > 0}
  <div class="dashboard-wrapper">
    <article
      class="dashboard"
      style:--dashboard-column={$columns.length || ''}
      style:--dashboard-gap={$preference.columnGap}>
      {#each $columns as column, idx}
        <Column
          bind:this={_columns[idx]}
          key={idx}
          data={column}/>
      {/each}
    </article>
  </div>
{/if}

<script>
import { onMount, onDestroy } from 'svelte'
import { columns, settings } from '~/store/dashboard.js'
import { preference } from '~/store/preference.js'
import { randomNumber } from '~/libs/util.js'
import Column from './column.svelte'

let _columns = []
let current = -1

let now
let then = performance.now()
let interval = 1000 / 4
let delta

onMount(async () => {
  requestAnimationFrame(ticker)
})

function ticker()
{
  now = performance.now()
  delta = now - then
  if (delta > interval)
  {
    then = now - (delta % interval)
    const comp = _columns[randomNumber(0, 3)]
    if (comp) comp.addCard()
    // current++
    // if (current === _columns.length) current = 0
    // if (_columns[current]?.addCard)
    // {
    //   _columns[current].addCard()
    // }
  }
  requestAnimationFrame(ticker)
}
</script>

<style src="./dashboard.scss" lang="scss"></style>
