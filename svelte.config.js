import preprocess from 'svelte-preprocess'

const config = {
  preprocess: preprocess(),
  extensions: [ '.svelte' ],
  compilerOptions: {},
  onwarn(warning, defaultHandler) {
    switch (warning.code)
    {
      case 'unused-export-let':
      case 'css-unused-selector':
      case 'a11y-label-has-associated-control':
      case 'a11y-click-events-have-key-events':
        return
    }
    defaultHandler(warning)
  },
}

export default config
