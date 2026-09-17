import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'

type Theme = 'light' | 'dark' | 'system'
const STORAGE_KEY = 'portfolio-theme'

export function useTheme() {
  const theme = ref<Theme>('system')
  const systemIsDark = ref(false)
  let mediaQuery: MediaQueryList | undefined

  const isDark = computed(
    () => theme.value === 'dark' || (theme.value === 'system' && systemIsDark.value),
  )

  const applyTheme = () => {
    document.documentElement.classList.toggle('dark', isDark.value)
    document.documentElement.dataset.theme = isDark.value ? 'dark' : 'light'
  }

  const syncSystemTheme = (event?: MediaQueryListEvent) => {
    systemIsDark.value = event?.matches ?? mediaQuery?.matches ?? false
    applyTheme()
  }

  const toggleTheme = () => {
    theme.value = isDark.value ? 'light' : 'dark'
  }

  onMounted(() => {
    const savedTheme = localStorage.getItem(STORAGE_KEY)
    theme.value = savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : 'system'
    mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    syncSystemTheme()
    mediaQuery.addEventListener('change', syncSystemTheme)
  })

  onBeforeUnmount(() => mediaQuery?.removeEventListener('change', syncSystemTheme))

  watch(theme, (value) => {
    localStorage.setItem(STORAGE_KEY, value)
    applyTheme()
  })

  return { isDark, theme, toggleTheme }
}
