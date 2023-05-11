import App from '~/app.svelte'
import '~/assets/css/main.scss'

let app
const $app = document.getElementById('app')

// render app component
app = new App({
  target: $app,
})

export default app
