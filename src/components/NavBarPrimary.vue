<script setup lang="ts">
  defineProps({
    navs: {
      type: Object,
      default() {
        return {}
      },
    },
    currentPath: {
      type: String,
      default: '/',
    },
  })
</script>
<template>
  <div class="h-full items-center">
    <div class="flex h-full space-x-2">
      <BaseButton
        v-for="(nav, index) in navs"
        :key="index"
        :to="nav.to"
        :label="nav.title"
        size="lg"
        :variant="nav.to === currentPath ? 'solid' : 'ghost'"
        class="!rounded-lg"
      >
      </BaseButton>
    </div>
    <BaseButton
      class="ml-3"
      target="_blank"
      to="https://vuedesigner.com"
      size="xl"
      color="secondary"
      ><span class="pl-2">Try Now</span>
      <template #trailing>
        <BaseIcon name="i-mdi-pine-tree" height="24px"></BaseIcon>
      </template>
    </BaseButton>
  </div>
</template>
<style scoped></style>
