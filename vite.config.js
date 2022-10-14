import { resolve } from 'path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import environmentPlugin from 'vite-plugin-environment'
import dynamicImport from 'vite-plugin-dynamic-import'

export default ({ mode }) =>
    defineConfig({
        plugins: [
            environmentPlugin({
                MODE: mode,
                BEHAVIORS_PATH: fileURLToPath(new URL('js/behaviors', import.meta.url)),
                BEHAVIORS_EXTENSION: 'js'
            }),
            dynamicImport()
        ],
        resolve: {
            alias: {
                '@': resolve(__dirname, 'js')
            }
        }
    })