<div class="card-body">
  {#if imagePattern === 1}
    <figure class="card-body__image">
      <Image --ratio="4/3"/>
      <Image --ratio="4/3"/>
    </figure>
  {:else if imagePattern === 2}
    <Image --ratio="16/9" --width="100%"/>
  {/if}
</div>

<script>
import { randomNumber } from '~/libs/util.js'
import Image from '../parts/image.svelte'

export let shuffle = false
let imagePattern = randomNumber(1,2)
</script>

<style lang="scss">
@import './common';

.card-body {
  &__image {
    display: grid;
    margin: 0;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--card-gap, 8px);
  }
}
</style>
