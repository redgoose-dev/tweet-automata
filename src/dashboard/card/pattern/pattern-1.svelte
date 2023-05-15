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
    'title image'
    'description image'
    'meta image';
  grid-template-columns: 1fr 82px;
  grid-template-rows: auto 1fr auto;
}
</style>
