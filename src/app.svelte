{#if loading}
  <p>loading..</p>
{:else}
  <Dashboard/>
{/if}

<script>
import { onMount } from 'svelte'
import { columns, settings } from '~/store/dashboard.js'
import { columnCount, cardOption } from '~/libs/defaults.js'
import Dashboard from '~/dashboard/dashboard.svelte'

let loading = true

onMount(async () => {
  $columns = (new Array(columnCount)).fill(cardOption)
  loading = false
})
</script>
