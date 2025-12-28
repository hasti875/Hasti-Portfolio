import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Root-level Vite config that points to the `project/` app folder so hosts
// building from the repository root (like Vercel) can find and build the app.
export default defineConfig({
  root: path.resolve(__dirname, 'project'),
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    // Ensure build artifacts end up in project/dist
    outDir: path.resolve(__dirname, 'project', 'dist'),
    emptyOutDir: true,
  },
});
