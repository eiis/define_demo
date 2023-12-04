<script setup lang="ts">
import {ref, provide} from 'vue'
import HelloWorld from "./components/HelloWorld.vue"
// import VTest from "./components/VTest.vue"
import { InjectKeyUser, InjectKeyCount } from './utils/context'
// import { header } from './index'

import {emitter, FLASH_EVENT} from './utils/mitter'


// const header = ref('header');

// import Loop from './components/Loop.vue';
// const items = [
//   {
//     key: 'a',
//     label: 'A',
//   },
//   {
//     key: 'b',
//     label: 'B',
//   },
// ];

const count = ref(1)
// const header = ref('header');

function click(){
  console.log(count.value);
  count.value +=1
  emitter.emit(FLASH_EVENT,{
    message:'hello',
    color:'red'
  })
}
// interface UserInfo {
//   id:number,
//   name:string
// }

// const injectKeyUser:InjectionKey<UserInfo> = Symbol()

provide(InjectKeyUser,{
  id:1,
  name:'1'
})
provide(InjectKeyCount,1)
provide('1',3)

</script>

<template>
  <HelloWorld :count="count" @click="click"/>
  <!-- <v-test email="email" name="name"></v-test>

  <Loop :items="items">
    <template v-for="item in items" :key="item.key" #[header]="item">
      {{ item }}
    </template>
  </Loop> -->
</template>

<style scoped lang="scss">
 ::v-deep {
  .count {
    color:green;
  }
 }
</style>

