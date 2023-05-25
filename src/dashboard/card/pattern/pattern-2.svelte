<div class="card-body">
  <Image
    --area="image-1"
    --ratio="21/9"/>
  <Image
    --area="image-2"
    --ratio="4/3"/>
  <Image
    --area="image-3"
    --ratio="4/3"/>
</div>

<script>
import Image from '../parts/image.svelte'

export let shuffle = false
</script>

<style lang="scss">
@import './common';
.card-body {
  grid-template-areas:
    'image-1 image-1'
    'image-2 image-3';
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
}
</style>
