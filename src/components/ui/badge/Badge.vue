<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

defineOptions({ name: 'UiBadge' })

const props = defineProps<{ class?: HTMLAttributes['class'] }>()
</script>

<template>
  <span
    :class="
      cn(
        'inline-flex items-center rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground',
        props.class,
      )
    "
  >
    <slot />
  </span>
</template>
