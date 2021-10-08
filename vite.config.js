import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  server: {
    proxy: {
      '/api': 'https://ljudio-backend.herokuapp.com'
    },
    fs: {
      strict: false
    }

  }
})
