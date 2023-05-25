<div
  class="card-body"
  class:pattern-1={pattern === 1}>
  <div class="card-body__image">
    <Image
      --height="auto"
      --ratio="1/1"/>
  </div>
  <div class="card-body__content">
    <Title shuffle={shuffle}/>
    <Description shuffle={shuffle}/>
    <Meta shuffle={shuffle}/>
  </div>
</div>

<script>
import { randomSelectItemFromArray } from '~/libs/util.js'
import Title from '../parts/title.svelte'
import Description from '../parts/description.svelte'
import Meta from '../parts/meta.svelte'
import Image from '../parts/image.svelte'

let pattern = randomSelectItemFromArray([ 0, 1 ])
export let shuffle = false
</script>

<style lang="scss">
@import './common';
.card-body {
  gap: 12px;
  align-items: center;
  grid-template-areas: 'image content';
  grid-template-columns: 25% 1fr;
  &__image {
    grid-area: image;
  }
  &__content {
    grid-area: content;
    display: grid;
    gap: 8px 0;
    min-width: 0;
  }
  &.pattern-1 {
    grid-template-areas: 'content image';
    grid-template-columns: 1fr 25%;
  }
}
</style>
