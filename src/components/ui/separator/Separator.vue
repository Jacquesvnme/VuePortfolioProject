<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { Separator } from 'reka-ui'
import { cn } from '@/lib/utils'

defineOptions({ name: 'UiSeparator' })

const props = withDefaults(
  defineProps<{
    orientation?: 'horizontal' | 'vertical'
    decorative?: boolean
    class?: HTMLAttributes['class']
  }>(),
  { orientation: 'horizontal', decorative: true },
)
</script>

<template>
  <Separator
    :orientation="orientation"
    :decorative="decorative"
    :class="
      cn(
        'shrink-0 bg-border',
        orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px',
        props.class,
      )
    "
  />
</template>
