import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Define your aliases here
      'pages': '/src/pages', // This maps '@components' to 'src/components'
      // Add more aliases as needed
    },
  },
})
