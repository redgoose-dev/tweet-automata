{#if $columns.length > 0}
  <article
    class="dashboard"
    style:--dashboard-column={$columns.length || ''}
    style:--dashboard-gap="8px">
    {#each $columns as column}
      <Column data={column}/>
    {/each}
  </article>
{/if}

<script>
import { onDestroy } from 'svelte'
import { columns, settings } from '~/store/dashboard.js'
import Column from './column.svelte'
</script>

<style src="./dashboard.scss" lang="scss"></style>
