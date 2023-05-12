{#if cards.length > 0}
  <ul class="cards">
    {#each cards as card}
      <CardWrapper tag="li">
        <Card data={card}/>
      </CardWrapper>
    {/each}
  </ul>
{/if}

<script>
import { onMount } from 'svelte'
import Card from './card.svelte'
import CardWrapper from './card-wrapper.svelte'

export let data
let cards = []
const limit = 12
let idx = -1

export function makeCard()
{
  idx++
  cards = [
    {
      key: idx,
      pattern: Math.floor(Math.random() * 24),
    },
    ...cards,
  ]
  if (cards.length > limit)
  {
    cards = cards.splice(0, limit)
  }
}
</script>

<style src="./column.scss" lang="scss"></style>
