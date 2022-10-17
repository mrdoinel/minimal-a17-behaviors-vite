import { resolve } from 'path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import environmentPlugin from 'vite-plugin-environment'
import dynamicImport from 'vite-plugin-dynamic-import'

export default ({ mode }) =>
    defineConfig({
        plugins: [
            dynamicImport(),
            environmentPlugin({
                MODE: mode,
                BEHAVIORS_PATH: resolve(__dirname, 'js/lazybehaviors'),
                BEHAVIORS_EXTENSION: 'js'
            })
        ],
        resolve: {
            alias: {
                '@': resolve(__dirname, 'js')
            }
        },
        build: {
            target: 'modules',
            assetsDir: 'assets',
            dynamicImportVarsOptions: { warnOnError: true }
        }
    })