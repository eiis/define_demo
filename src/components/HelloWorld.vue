<script setup lang="ts">
import {computed} from 'vue'

export interface Props {
  count?: number
  labels?: string[]
}


// const ilogo ='logo'
// const url =`../assets/${ilogo}.png`
// console.log(new URL('../assets/'+ ilogo +'.png', import.meta.url).href,'URL');
// console.log(new URL(`../assets/${ilogo}.png`, import.meta.url).href,'URL');
// console.log(new URL(url, import.meta.url).href,'URL');


const {count} =defineProps<{ count: number }>()
// const { count } = toRefs(props);
const even = computed(() =>  (count % 2 === 0 ? 'even' : 'odd'));
</script>

<template>
  <div class="hello">
    <h1 class="count">{{ count }}</h1>
    <h1> The number is {{ even }}</h1>
  </div>
</template>

<style scoped>
.count {
  color: red;
}
</style>
