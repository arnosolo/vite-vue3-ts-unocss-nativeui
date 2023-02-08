<script setup lang="ts">
import PageHeader from '@src/components/PageHeader.vue'
</script>

<template>
  <page-header class="font-v-sans" />
  <div flex justify-center class="font-v-sans">
    <div w-full max-w-7xl>
      <router-view />
    </div>
  </div>
</template>

<style scoped>
.font-v-sans {
  font-family: v-sans, v-mono, other-fallbacks;
}
</style>
