import { defineConfig } from 'vite';
import { resolve } from 'path';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: {
                devtools: resolve(__dirname, 'devtools.html'),
                panel: resolve(__dirname, 'panel.html'),
            }
        }
    },
    plugins: [
        viteStaticCopy({
            targets: [
                { src: 'manifest.json', dest: '.' },
                { src: 'src/models', dest: 'src' }
            ]
        })
    ]
});
