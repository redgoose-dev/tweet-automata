{#if cards.length > 0}
  <ul class="cards">
    {#each cards as card}
      <CardWrapper tag="li">
        <Card/>
      </CardWrapper>
    {/each}
  </ul>
{/if}

<script>
import Card from './card.svelte'
import CardWrapper from './card-wrapper.svelte'

export let data
const cards = [ 1, 2, 3 ]
</script>

<style src="./column.scss" lang="scss"></style>
