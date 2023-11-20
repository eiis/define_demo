<script setup lang="ts">

defineProps<{ items: Record<string, any>[] }>();
</script>

<template>
  <div>
    <div v-for="item in items">
      <slot name="header" :item="item" />
    </div>
  </div>
</template>
