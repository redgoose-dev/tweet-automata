<div class="card-body">
  {#if imagePattern === 1}
    <figure class="card-body__image-1">
      <Image --ratio="4/3"/>
      <Image --ratio="4/3"/>
    </figure>
  {:else if imagePattern === 2}
    <Image --ratio="21/9"/>
  {/if}
  <Title --area="title" shuffle={false}/>
  <Description --area="description" shuffle={false}/>
  <Meta --area="meta" shuffle={false}/>
</div>

<script>
import { randomNumber } from '~/libs/util.js'
import Title from '../parts/title.svelte'
import Description from '../parts/description.svelte'
import Meta from '../parts/meta.svelte'
import Image from '../parts/image.svelte'

export let shuffle = false
let imagePattern = randomNumber(1,2)
</script>

<style lang="scss">
@import './common';
.card-body {
  grid-template-areas:
    'title'
    'image'
    'description'
    'meta';
  &__image-1 {
    display: grid;
    margin: 0;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--card-gap, 8px);
    grid-area: image;
  }
}
</style>
