<template>
  <div>Test</div>
</template>

<script setup lang="ts">
interface Extended extends /** @vue-ignore */ Test {
    email: string;
}

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

defineProps<Extended>();
</script>

<style scoped></style>
