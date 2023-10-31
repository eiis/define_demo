<script setup lang="ts">
import {computed,ref,useAttrs} from 'vue'
//ts导入类型语法
import type {Ref,UnwrapRef} from 'vue'
import type { CustomAttrs} from './type'

export interface Props {
  count?: number
  labels?: string[]
}

let image:Ref<HTMLImageElement | null> = ref(null)

let a:UnwrapRef<Ref<number>> =(1)


const attrs = useAttrs() as CustomAttrs
console.log(attrs,'attrs');

function click(){
  console.log('click');
  
  attrs.onClick()
}


let b:Ref<number> =ref(1)

console.log(image.value);
console.log(a);
console.log(b);

const src = ref('')
const ilogo ='vue'
const url =`../assets/${ilogo}.svg`
function testDynamicImportMetaUrl(ilogo:string) {
  // console.log(`../assets/${ilogo}.png`,'ilogo');
  // const url = `../assets/${ilogo}.svg`
  const metaUrl = new URL(`../assets/${ilogo}.svg`,import.meta.url).href
  src.value = metaUrl
  // document.querySelector(`.dynamic-import-meta-url-img`).src = metaUrl
  console.log(src.value,'metaUrl');
  // console.log(import.meta.url,'import.meta.url');
}

testDynamicImportMetaUrl(ilogo)

// const metaUrl = new URL(`../assets/${ilogo}.png`, import.meta.url)
// console.log('metaUrl', metaUrl)
// console.log('import.meta.url', import.meta.url)
console.log(new URL('../assets/'+ ilogo +'.svg', import.meta.url).href,'URL');
console.log(new URL(`../assets/${ilogo}.svg`, import.meta.url).href,'URL');
console.log(new URL(url, import.meta.url).href,'URL');
interface ButtonHTMLAttributes {
  disabled?: boolean;
  form?: string;
  formAction?: string;
  formEncType?: string;
  formMethod?: string;
  formNoValidate?: boolean;
  formTarget?: string;
  name?: string;
  count?:number;
  type?: 'submit' | 'reset' | 'button';
  value?: string | string[] | number;
}

type ButtonProps = Pick<ButtonHTMLAttributes, 'type' | 'name' | 'count'>;

const {count} = defineProps<ButtonProps>();

interface MyButtonProps extends ButtonHTMLAttributes {
    variant: 'blue' | 'white'
}

//引用一个本地接口
const obj:MyButtonProps = {
  variant:'blue',
  disabled:true
}

console.log(obj);


// const {count} =defineProps<{ count: number }>()
// const { count } = toRefs(props);
const even = computed(() =>  (count! % 2 === 0 ? 'even' : 'odd'));
</script>

<template>
  <div class="hello">
    <h1 class="count">{{ count }}</h1>
    <h1> The number is {{ even }}</h1>
    <button @click="click">Click</button>
    <!-- <img class="dynamic-import-meta-url-img" src="../assets/vue.svg"/> -->
    <!-- <img class="dynamic-import-meta-url-img" :src="src"/> -->
  </div>
</template>

<style scoped>
.count {
  color: red;
}
</style>
