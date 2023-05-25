{#if $columns.length > 0}
  <div
    class="dashboard-wrapper"
    style:--dashboard-padding={$preference.padding}>
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
import { tickerStatus } from '~/store/dashboard.js'
import { randomNumber, randomSelectItemFromArray } from '~/libs/util.js'
import Column from './column.svelte'

let _columns = []
let current = -1
let now
let then = performance.now()
let interval = 1000 / getFps()
let delta
let frame

onMount(play)

function ticker()
{
  if ($tickerStatus === 'stop') return
  now = performance.now()
  delta = now - then
  if (delta > interval)
  {
    then = now - (delta % interval)
    const comp = _columns[randomNumber(0, $columns.length - 1)]
    if (comp) comp.addCard()
    current++
  }
  if ($preference.limitCount === 0 || current < $preference.limitCount)
  {
    interval = 1000 / getFps()
    frame = requestAnimationFrame(ticker)
  }
}

function getFps()
{
  return randomSelectItemFromArray($preference.fps)
}

export function stop()
{
  if (!frame) return
  $tickerStatus = 'stop'
  cancelAnimationFrame(frame)
  frame = undefined
}
export function play()
{
  if (frame) return
  $tickerStatus = 'play'
  frame = requestAnimationFrame(ticker)
}
</script>

<style src="./dashboard.scss" lang="scss"></style>
