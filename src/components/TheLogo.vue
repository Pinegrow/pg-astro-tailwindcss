<script setup lang="ts">
  import site from '@/site'
  const { name, logo } = site
</script>
<template>
  <a data-pg-name="Logo" class="flex items-center sm:flex-row" href="/">
    <BaseIcon class="mt-2" height="32px" :name="logo" />
    <h6
      class="text-primary-600 dark:text-primary-200 font-extrabold font-serif ml-2 mt-4 text-2xl"
    >
      {{ name }}
    </h6>
  </a>
</template>
<style scoped></style>
