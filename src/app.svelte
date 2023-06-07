{#if loading}
  <Loading/>
{:else}
  <Dashboard bind:this={__dashboard}/>
{/if}
{#if useControl}
  <nav class="control">
    <button
      type="button"
      on:click={onToggle}
      class:play={$tickerStatus === 'stop'}
      class:stop={$tickerStatus === 'play'}>
      {$tickerStatus === 'stop' ? 'PLAY' : 'STOP'}
    </button>
  </nav>
{/if}

<script>
import { onMount, tick } from 'svelte'
import { columns, tickerStatus } from '~/store/dashboard.js'
import { columnTypes, cardOption } from '~/libs/defaults.js'
import { sleep, getScreenMode } from '~/libs/util.js'
import { preference, setupPreference } from '~/store/preference.js'
import Dashboard from '~/dashboard/dashboard.svelte'
import Loading from '~/components/loading/loading.svelte'

let __dashboard
let loading = true
let timer
let column
let useControl = import.meta.env.DEV

onMount(async () => {
  setupPreference()
  await tick()
  window.addEventListener('resize', onResize)
  column = columnTypes[getScreenMode()]
  play().then()
})

async function onResize()
{
  if (timer)
  {
    clearTimeout(timer)
    timer = undefined
  }
  timer = setTimeout(function () {
    timer = undefined
    const newColumn = columnTypes[getScreenMode()]
    if (column === newColumn) return
    column = newColumn
    play().then()
  }, 600)
}

async function play()
{
  if (__dashboard)
  {
    __dashboard.stop()
  }
  loading = true
  await sleep($preference.loadingTime)
  $columns = (new Array(column)).fill(cardOption)
  loading = false
}

function onToggle()
{
  if ( !__dashboard ) return
  if ( $tickerStatus === 'stop' )
  {
    __dashboard.play()
  }
  else
  {
    __dashboard.stop()
  }
}
</script>

<style lang="scss">
.control {
  position: fixed;
  z-index: 2;
  right: 42px;
  bottom: 42px;
  button {
    padding: 8px 12px;
    cursor: pointer;
    border: none;
    box-shadow: 0 2px 8px hsl(0 0% 0% / 25%), 0 0 0 1px hsl(0 0% 100% / 50%);
    width: 64px;
    height: 64px;
    border-radius: 4px;
    font-weight: 700;
    font-size: 14px;
    transition: background-color 200ms ease-out;
    color: #fff;
    background: #555;
    &.stop {
      background: #f11356;
    }
    &.play {
      background: #1eb81c;
    }
  }
}
</style>
