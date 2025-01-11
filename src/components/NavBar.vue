<script setup lang="ts">
  defineProps({
    currentPath: {
      type: String,
      default: '/',
    },
  })

  const { allNavs, navsPrimary, navsSecondary } = useNavMenu()
</script>
<template>
  <div class="w-full">
    <nav class>
      <div class="container mx-auto px-4 sm:px-6">
        <div class="flex h-24 items-center justify-between">
          <div class="flex items-center justify-between w-full">
            <div class="flex flex-shrink-0 items-center">
              <TheLogo />
            </div>
            <NavBarPrimary
              :navs="navsPrimary"
              :current-path="currentPath"
              class="hidden sm:flex sm:ml-6"
            />
          </div>
          <DarkModeSwitch />
          <div class="-mr-2 items-center relative">
            <NavBarHamburger
              v-if="navsSecondary?.length"
              class="hidden sm:block"
            />
            <NavBarHamburger v-if="allNavs.length" class="sm:hidden" />
            <NavBarSecondary
              class="hidden sm:flex sm:justify-end absolute right-0 mt-4"
              :navs="navsSecondary"
              :current-path="currentPath"
            />
          </div>
        </div>
      </div>
      <NavBarSecondary
        class="sm:hidden"
        :navs="allNavs"
        :current-path="currentPath"
      />
    </nav>
  </div>
</template>
<style scoped></style>
