import type { Plugin } from 'vite'

import path from 'path';
import { normalizePath } from 'vite';

import { getViteVersion } from './getViteVersion'

let vite_version:number | null
let config:any

const supportedFileExt = ['.jpg', '.jpeg', '.png', '.gif', '.webp']

const defaults = {
  scale: undefined,
  width: undefined,
  height: undefined,
  includePublic: [],
  excludePublic: [],
  exclude: [],
  '.jpg': {
    quality: 80
  },
  '.jpeg': {
    quality: 80
  },
  '.png': {
    quality: 80,
    palette: true
  },
  '.webp': {
    lossless: true
  },
  preserveMetadata: {
    orientation: false,
    icc: false,
    exif: false
  }
}

function getImgs(data:any[], opts:any) {
  let _imgs:any[] = []
  data.forEach((el) => {
    //取扩展名
    let thisExt = path.extname(el)
    console.log(thisExt,'thisExt');
    
    let thisName
    if (vite_version! < 4) {
      thisName = path.basename(el).split('.')
    } else {
      thisName = path.basename(el).split('-')
    }

    thisName = thisName.reverse()
    thisName.splice(0, 2)
    thisName = thisName.join('')

    console.log(thisName,'thisName');

    if (opts.exclude.includes(thisName + thisExt)) {
      return false
    }

    if (supportedFileExt.includes(thisExt)) {
      el = normalizePath(el)
      el = el.replace(config.root + '/', '')
      _imgs.push(el)
    }
  })

  return _imgs
}

export default function VitePluginDemo(opts={}): Plugin{

  const options = Object.assign({}, defaults, opts)
  return{
    name: 'vite-plugin-demo',

    config(config){
      // console.log('config',config);
      return{
        define: {
          __VUE_OPTIONS_API__: false,
        },
      }
    },
    configResolved(res){
      // console.log('configResolved',config.define);
      config = res
      vite_version = parseInt(
          getViteVersion(config.root).replace(/^\D+/, '').split('.')[0]
        )
      console.log('configResolved',vite_version);
    },
    load(id){
      // console.log('load',id);
    },
    generateBundle(op, bundle, isWrite){
      console.log('generateBundle生成',Object.keys(bundle));
      console.log('generateBundle生成',isWrite);
    },
    writeBundle(op, bundle){
      console.log('writeBundle写入bundle',Object.keys(bundle));

      let outDir:string = op.dir as string
      let keys = Object.keys(bundle)
      // console.log(keys,'keys');
      
      keys = keys.map((el) => {
        return path.join(outDir, el)
      })
      console.log(keys,'keys');

      let bundle_images = getImgs(keys, options)
      console.log('bundle_images',bundle_images);
    },
  }
}
