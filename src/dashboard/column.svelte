<ul bind:this={__cards} class="column"></ul>

<script>
import { onMount } from 'svelte'
import * as cardPattern from '~/dashboard/card/pattern/index.js'
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
        pattern: Math.floor(Math.random() * cardPattern.components.length),
      },
    },
  })
  const __card = card.$$.root.children[0]
  __cards.prepend(__card)
  io.observe(__card)
}

onMount(() => {
  io = new IntersectionObserver(interactionCallback, {
    root: __cards,
    // rootMargin: '0px 0px 420px 0px',
    // threshold: .5,
  })
})

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
