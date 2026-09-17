<script setup lang="ts">
defineProps<{ eyebrow: string; title: string; description: string }>()
</script>

<template>
  <header class="section-heading">
    <p class="eyebrow">{{ eyebrow }}</p>
    <h2
      :id="`${title.toLowerCase().replaceAll(' ', '-').replace('&', 'and')}-title`"
      class="display-title"
    >
      {{ title }}
    </h2>
    <p class="section-intro">{{ description }}</p>
  </header>
</template>
