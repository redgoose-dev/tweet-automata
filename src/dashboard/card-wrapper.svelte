<svelte:element this={tag} class="card-wrapper">
  <slot/>
</svelte:element>

<script>
export let tag = 'div'
</script>
