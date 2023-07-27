import { computed } from 'vue'
import site from '../site'
import { isClient } from '@vueuse/core'

export const useNav = () => {
  const navlinksFromConfig = site.nav
  const navlinks = computed(() => navlinksFromConfig /* || navlinksFromRouter*/)

  const currentPath = computed(() => {
    if (isClient) {
      return window.location.pathname
    }
  })

  return {
    navlinks,
    currentPath,
  }
}

export const isCurrentRoute = (navlink, currentPath) => {
  if (isClient) {
    currentPath = window.location.pathname
  }
  if (currentPath) {
    return navlink.link === '/'
      ? currentPath === navlink.link
      : currentPath.startsWith(navlink.link)
  }
}
