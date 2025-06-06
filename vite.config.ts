import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/TrentBreneman/',
  plugins: [react()],
  test: { 
    environment: 'jsdom', 
    globals: true, 
    setupFiles: './src/setupTests.ts', 
  },
});