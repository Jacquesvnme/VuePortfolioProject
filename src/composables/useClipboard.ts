import { ref } from 'vue'

export function useClipboard(resetAfter = 1800) {
  const copiedValue = ref<string | null>(null)

  const copy = async (value: string) => {
    await navigator.clipboard.writeText(value)
    copiedValue.value = value
    window.setTimeout(() => {
      if (copiedValue.value === value) copiedValue.value = null
    }, resetAfter)
  }

  return { copiedValue, copy }
}
