{#if $columns.length > 0}
  <article
    class="dashboard"
    style:--dashboard-column={$columns.length || ''}
    style:--dashboard-gap={$preference.columnGap}>
    {#each $columns as column, idx}
      <Column bind:this={_columns[idx]} data={idx}/>
    {/each}
  </article>
{/if}

<script>
import { onMount, onDestroy } from 'svelte'
import { columns, settings } from '~/store/dashboard.js'
import { preference } from '~/store/preference.js'
import Column from './column.svelte'

let _columns = []
let current = -1

let now
let then = performance.now()
let interval = 1000 / 30
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
    // console.log('call ticker', now)
    current++
    if (current === _columns.length) current = 0
    if (_columns[current]?.makeCard)
    {
      _columns[current].makeCard()
    }
  }
  requestAnimationFrame(ticker)
}
</script>

<style src="./dashboard.scss" lang="scss"></style>
