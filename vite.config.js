import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.js',
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
    resolve: {
        alias: {
            '@': '/resources/js',
           //'ziggy': '/vendor/tightenco/ziggy/dist/vue.m',
           'ziggy-js': '/node_modules/ziggy-js/dist/index.esm.js', // Ajusta la ruta si es necesario
        },
    },
});
