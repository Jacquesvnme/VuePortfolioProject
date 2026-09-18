<script setup lang="ts">
defineProps<{ number: string; total: string }>()
</script>

<template>
  <div class="chapter-divider" role="separator" aria-orientation="horizontal">
    <span class="chapter-divider-number">{{ number }} / {{ total }}</span>
  </div>
</template>
