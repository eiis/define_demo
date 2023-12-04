import type { Plugin } from 'vite'

export default function VitePluginDemo(): Plugin{
  return{
    name: 'vite-plugin-demo',

    config(config){
      console.log('config',config);
      return{
        define: {
          __VUE_OPTIONS_API__: false,
        },
      }
    },
    configResolved(config){
      console.log('configResolved',config.define);
    },
    load(id){
      console.log('load',id);
    }
  }
}
