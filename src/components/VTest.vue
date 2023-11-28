<template>
  <div>{{aa}}</div>
  <div>{{bb}}</div>
  <div>{{$props.email}}</div>
  <div>{{$props.name}}</div>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import { InjectKeyUser, InjectKeyCount } from '../utils/context'
// console.log(import.meta.env.VITE_APP_TITLE, 'import.meta.env.VITE_APP_TITLE');

// console.log(__VUE_OPTIsONS_API__,__VUE_PROD_DEVTOOLS__,'__VUE_OPTIONS_API__');

const aa = inject(InjectKeyCount,3)
//@ts-ignore
const bb = inject(1,4)

const user = inject(InjectKeyUser)
console.log(user);



interface Extended extends /* @vue-ignore */ Test {
  // name: string;
  email: string;
}
defineProps<Extended>();

// interface MyButtonProps extends ButtonHTMLAttributes {}

// defineProps<MyButtonProps>();

// interface Test {
//   name: string;
//   email: string;
//   age: number
// }

// interface Extended extends Test {
//   email: string;
// }

// type Extended = {
//   email: string;
// } & Test

// type Extended = Pick<Test, 'name' | 'email'>;
</script>

<style scoped></style>
