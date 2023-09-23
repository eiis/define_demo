<script setup lang="ts">
import {ref} from 'vue'
import HelloWorld from "./components/HelloWorld.vue"

const count = ref(2)

function click(){
  count.value +=1
}
</script>

<template>
  <HelloWorld :count="count" />
  <button @click="click">Click</button>
</template>

