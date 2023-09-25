<script setup lang="ts">
  import { computed } from 'vue'
  import { useNav } from '@/composables/nav'

  const { navlinks, currentLocation } = useNav()
  const desktopNavTabs = computed(() => {
    return navlinks.value.slice(0, 2)
  })
  const mobileNavTabs = computed(() => {
    return navlinks.value.slice(2, navlinks.value.length)
  })
</script>
<template>
  <div class="w-full">
    <nav class>
      <div class="container mx-auto px-4 sm:px-6">
        <div class="flex h-24 items-center justify-between">
          <div class="flex items-center justify-between w-full">
            <div class="flex flex-shrink-0 items-center">
              <a
                href="/"
                class="flex items-center text-primary-600 dark:text-primary-200"
              >
                <span class="font-sans relative text-3xl font-bold top-1"
                  >Vue Designer</span
                >
              </a>
            </div>
            <NavBarDesktopMenu
              :navlinks="desktopNavTabs"
              class="hidden sm:flex sm:ml-6"
            />
          </div>
          <DarkModeSwitch />
          <div class="-mr-2 items-center relative">
            <NavBarMobileMenuButton
              v-if="mobileNavTabs.length"
              class="hidden sm:block"
            />
            <NavBarMobileMenuButton v-if="navlinks.length" class="sm:hidden" />
            <NavBarMobileMenu
              class="hidden sm:flex sm:justify-end absolute right-0 mt-4"
              :navlinks="mobileNavTabs"
            />
          </div>
        </div>
      </div>
      <NavBarMobileMenu class="sm:hidden" :navlinks="navlinks" />
    </nav>
    <!-- <span class="flex justify-end container mx-auto pr-36 text-red-600">
      Current Pathname: {{ currentLocation.pathname }}</span
    > -->
  </div>
</template>
<style scoped></style>
