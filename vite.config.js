/// <reference types="vitest" />
import { getViteConfig } from 'astro/config'
import preact from '@astrojs/preact'

export default getViteConfig({
  plugins: [preact()],
  test: {
    environment: 'happy-dom'
  }
})
