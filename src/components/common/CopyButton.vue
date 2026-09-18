<script setup lang="ts">
import { Check, Copy } from '@lucide/vue'
import { Button } from '@/components/ui/button'
import { useClipboard } from '@/composables/useClipboard'

const props = withDefaults(defineProps<{ value: string; label?: string }>(), { label: 'Copy' })
const { copiedValue, copy } = useClipboard()
</script>

<template>
  <Button
    variant="ghost"
    size="icon"
    class="copy-button"
    :aria-label="copiedValue === props.value ? 'Copied' : props.label"
    :title="copiedValue === props.value ? 'Copied' : props.label"
    @click="copy(props.value)"
  >
    <Check v-if="copiedValue === props.value" aria-hidden="true" />
    <Copy v-else aria-hidden="true" />
    <span class="sr-only">{{ copiedValue === props.value ? 'Copied' : props.label }}</span>
  </Button>
</template>
