import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/ZanonSite/', // <-- coloque exatamente o nome do repositório aqui
})
