import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig(()=> {
  return {
    base: '/react-coffee-plz',
    plugins: [react(), tsconfigPaths()],
    server: {
      host: '0.0.0.0', // 모든 네트워크 인터페이스에서 접근 가능
    }
  }
})
