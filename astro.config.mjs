import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'astro/config'
import vue from '@astrojs/vue'
import pinegrow from '@pinegrow/astro-module'
// import { fileURLToPath, URL } from 'node:url'

import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'
import preact from '@astrojs/preact'
import svelte from '@astrojs/svelte'
import Unocss from 'unocss/astro'
import presetIcons from '@unocss/preset-icons'
// import VueDevTools from 'vite-plugin-vue-devtools'

import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
  integrations: [
    vue(),
    pinegrow({
      liveDesigner: {
        iconPreferredCase: 'unocss',
        // default value (can be removed), unocss by default uses the unocss format for icon names
        devtoolsKey: 'devtools',
        // see app.ts
        tailwindcss: {
          configPath: 'tailwind.config.ts',
          cssPath: '@/assets/css/tailwind.css',
        },
        // plugins: [
        //   {
        //     name: 'My Awesome Lib 3.0',
        //     key: 'my-awesome-lib',
        //     pluginPath: fileURLToPath(
        //       new URL('./my-awesome-lib/web-types.json', import.meta.url),
        //     ),
        //   },
        // ],
      },
    }),
    tailwind({
      // Example: Disable injecting a basic `base.css` import on every page.
      // Useful if you need to define and/or import your own custom `base.css`.
      applyBaseStyles: false,
    }),
    react(),
    preact(),
    svelte(),
    Unocss({
      presets: [
        presetIcons({
          prefix: 'i-', // default prefix, do not change
        }),
      ],
    }),
    mdx(),
  ],
  vite: {
    plugins: [
      // VueDevTools()
    ],
    resolve: {
      alias: {
        '~~': fileURLToPath(new URL('./', import.meta.url)),
        '~': fileURLToPath(new URL('./src', import.meta.url)),
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  },
})
