import { computed } from 'vue'
import site from '../site'
import { isClient, useBrowserLocation } from '@vueuse/core'

export const useNavMenu = () => {
  const navlinksFromConfig = site.nav
  const navlinks = computed(() => navlinksFromConfig)

  const navlinksPrimary = computed(() => {
    return navlinks.value.filter(
      (navlink) => !navlink.type || navlink.type === 'primary',
    )
  })

  const navlinksSecondary = computed(() => {
    return navlinks.value.filter((navlink) => navlink.type === 'secondary')
  })

  const currentLocation = useBrowserLocation()

  return {
    navlinks,
    navlinksPrimary,
    navlinksSecondary,
    currentLocation,
  }
}
