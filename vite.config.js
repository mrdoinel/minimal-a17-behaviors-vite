import { resolve } from 'path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import environmentPlugin from 'vite-plugin-environment'
import dynamicImport from 'vite-plugin-dynamic-import'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default ({ mode }) =>
    defineConfig({
        plugins: [
            dynamicImport(),
            environmentPlugin({
                MODE: mode,
                BEHAVIORS_PATH: fileURLToPath(new URL('/js/lazybehaviors', import.meta.url)),
                BEHAVIORS_EXTENSION: 'js'
            })
        ],
        resolve: {
            alias: {
                '@': resolve(__dirname, 'js')
            }
        },
        build: {
            minify: false,
            target: 'modules',
            assetsDir: 'assets',
            dynamicImportVarsOptions: { 
                warnOnError: true,
                exclude: []
            }
        }
    })