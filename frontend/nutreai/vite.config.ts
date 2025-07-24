/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import type { InlineConfig } from 'vite'
import type { UserConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    setupFiles: ['./src/tests/setup.ts'],
    environment: 'happy-dom'
  },
} as UserConfig & {
  test: InlineConfig
})
