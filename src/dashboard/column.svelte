<ul bind:this={__cards} class="column"></ul>

<script>
import { onMount } from 'svelte'
import { randomSelectItemFromArray } from '~/libs/util.js'
import { preference } from '~/store/preference.js'
import Card from './card.svelte'

export let key
export let data
let io
let __cards
let cardKey = -1

export function addCard()
{
  cardKey++
  const el = document.createElement('template')
  const card = new Card({
    target: el,
    props: {
      data: {
        key: cardKey,
        pattern: getPattern(),
      },
    },
  })
  const __card = card.$$.root.children[0]
  __cards.prepend(__card)
  io.observe(__card)
}

function getPattern()
{
  return randomSelectItemFromArray($preference.cardPatternArea)
}

onMount(() => {
  io = new IntersectionObserver(interactionCallback, {
    root: __cards,
    rootMargin: $preference.observer.rootMargin || undefined,
    threshold: $preference.observer.threshold || undefined,
  })
})

// onDestroy(() => {
//   io = undefined
// })

function interactionCallback(entries, observer)
{
  entries.forEach(entry => {
    if (!entry.isIntersecting)
    {
      entry.target.remove()
      observer.unobserve(entry.target)
    }
  })
}
</script>

<style src="./column.scss" lang="scss"></style>
