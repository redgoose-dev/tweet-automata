import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import svelteConfig from './svelte.config'

// docs: https://vitejs.dev/config

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  return {
    base: './',
    server: {
      host: env.VITE_HOST,
      port: Number(env.VITE_PORT),
      open: env.VITE_OPEN_BROWSER === 'true',
    },
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      }
    },
    build: {
      outDir: 'docs',
      rollupOptions: {
        external: [],
        output: {
          // assetFileNames: assetInfo => {},
        },
      },
    },
    preview: {
      host: env.VITE_HOST,
      port: Number(env.VITE_PORT),
    },
    plugins: [
      svelte(svelteConfig),
    ],
  }
})
