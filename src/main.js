import App from '~/app.svelte'
import '~/assets/css/main.scss'

let app
let params = {}
const $app = document.getElementById('app')

// set url params
const urlParams = new URLSearchParams(window.location.search)
Object.entries(Object.fromEntries(urlParams)).forEach(([key,value]) => {
  if (!value) return
  switch (value)
  {
    case '0':
      params[key] = false
      break
    case '1':
      params[key] = true
      break
    default:
      params[key] = value
  }
})

// render app component
app = new App({
  target: $app,
  props: {
    ...params,
  },
})

export default app
