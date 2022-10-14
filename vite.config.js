import { resolve } from 'path'
import { defineConfig } from 'vite'
import environmentPlugin from 'vite-plugin-environment'

export default ({ mode }) =>
    defineConfig({
        plugins: [
            environmentPlugin({
                MODE: mode,
                BEHAVIORS_PATH: resolve(
                    __dirname,
                    'js/behaviors'
                ),
                BEHAVIORS_EXTENSION: 'js'
            })
        ],
        resolve: {
            alias: {
                '@': resolve(__dirname, 'js')
            }
        }
    })