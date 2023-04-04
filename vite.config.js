import react from '@vitejs/plugin-react';
import alias from '@rollup/plugin-alias';
import { defineConfig, loadEnv } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';


export default defineConfig(({ command, mode, ssrBuild }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [
        react(),
        createHtmlPlugin({
            minify: true,
            entry: 'src/app/main.jsx',
            template: 'index.html',
            inject: {
                data: {
                    title: 'Login with Vite',
                    injectScript: `<script>console.log("LOG VIA SCRIPT INJECTED")</script>`,
                    windowEnv: `{
                        env: '${env.NODE_ENV}'
                    }`
                },
            },
        }),
      alias({
        entries: [
            {
                find: '~/assets',
                replacement: '/assets'
            },
            {
                find: '~/components',
                replacement: '/src/components'
            },
            {
                find: '~/pages',
                replacement: '/src/pages'
            },
            {
                find: '~/utils',
                replacement: '/src/utils'
            },
        ],
      })
    ],
    define: {
        __APP_ENV__: env.APP_ENV,
    },
    server: {
        open: '/login',
    },
  }
})
