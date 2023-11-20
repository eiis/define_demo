/// <reference types="vitest" />
import { defineConfig ,loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
// import VueComplexTypes from "unplugin-vue-complex-types/vite";
import VitePluginDemo from './src/plugins/vite-plugin-demo'

export default defineConfig(({ command, mode })=>{
  const env = loadEnv(mode, process.cwd(), '')

  // console.log(env.VITE_APP_TITLE,'env');
  
  // console.log('process.env.BASE_ENV', path.join(process.cwd(), "tsconfig.json"))
  return{
    base: '/',
    plugins: [
      vue({
        script: {
          propsDestructure: true
        }
      }),
      VitePluginDemo()
      // VueComplexTypes({
      //   tsconfigPath: path.join(process.cwd(), "tsconfig.json"),
      // }),
    ],
    define:{
      __APP_VERSION__: JSON.stringify('1.0.0'),
    },
    test: {
      include: ['test/*.ts'],
      environment: 'jsdom',
      deps: {
        inline: ['@vue', '@vueuse', 'vue-demi'],
      },
    },
  }
})
