import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // O el plugin que uses (vue, svelte, etc.)

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // ¡Importante! Debe coincidir exactamente con el nombre de tu repositorio
})