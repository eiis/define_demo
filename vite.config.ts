/// <reference types="vitest" />
import { defineConfig ,loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
// import VueComplexTypes from "unplugin-vue-complex-types/vite";
import path from 'path';

export default defineConfig(({ command, mode })=>{
  const env = loadEnv(mode, process.cwd(), '')

  console.log('process.env.BASE_ENV', path.join(process.cwd(), "tsconfig.json"))
  return{
    base: '/',
    plugins: [
      vue({
        script: {
          propsDestructure: true
        }
      }),
      // VueComplexTypes({
      //   tsconfigPath: path.join(process.cwd(), "tsconfig.json"),
      // }),
    ],
  test: {
    include: ['test/*.ts'],
    environment: 'jsdom',
    deps: {
      inline: ['@vue', '@vueuse', 'vue-demi'],
    },
  },
  }
})
