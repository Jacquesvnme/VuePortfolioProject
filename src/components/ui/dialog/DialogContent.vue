<script setup lang="ts">
import type { DialogContentEmits, DialogContentProps } from 'reka-ui'
import { X } from '@lucide/vue'
import {
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  useForwardPropsEmits,
} from 'reka-ui'

const props = defineProps<DialogContentProps>()
const emits = defineEmits<DialogContentEmits>()
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <DialogPortal>
    <DialogOverlay class="dialog-overlay" />
    <DialogContent v-bind="forwarded" class="dialog-content">
      <slot />
      <DialogClose class="dialog-close" aria-label="Close dialog">
        <X aria-hidden="true" />
      </DialogClose>
    </DialogContent>
  </DialogPortal>
</template>
