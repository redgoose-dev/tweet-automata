<div class="card-body">
  <Image --area="image"/>
  <Title --area="title"/>
  <Description --area="description"/>
  <Meta --area="meta"/>
</div>

<script>
import Title from '../parts/title.svelte'
import Description from '../parts/description.svelte'
import Meta from '../parts/meta.svelte'
import Image from '../parts/image.svelte'
</script>

<style lang="scss">
@import './common';
.card-body {
  grid-template-areas:
    'image title'
    'image description'
    'image meta';
  grid-template-columns: 82px 1fr;
  grid-template-rows: auto 1fr auto;
}
</style>
