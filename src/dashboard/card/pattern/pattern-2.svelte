<div class="card-body">
  <Image --area="image-1"/>
  <Image --area="image-2"/>
</div>

<script>
import Image from '../parts/image.svelte'
</script>

<style lang="scss">
@import './common';
.card-body {
  grid-template-areas: 'image-1 image-2';
  grid-template-columns: 1fr 1fr;
}
</style>
