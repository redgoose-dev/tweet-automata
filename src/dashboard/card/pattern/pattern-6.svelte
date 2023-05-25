<div class="card-body">
  <Title --area="title" shuffle={shuffle}/>
  <Description --area="description" shuffle={shuffle}/>
  <Meta --area="meta" shuffle={shuffle}/>
</div>

<script>
import Title from '../parts/title.svelte'
import Description from '../parts/description.svelte'
import Meta from '../parts/meta.svelte'

export let shuffle = false
</script>

<style lang="scss">
@import './common';
.card-body {
  grid-template-areas:
    'title'
    'description'
    'meta';
}
</style>
