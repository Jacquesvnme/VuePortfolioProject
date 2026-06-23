<script setup>
import Markdown from '../../Svg/Brands/Markdown.vue'
</script>

<template>
  <div class="badge markdown-badge display-inline">
    <Markdown class="small-svg-styling" />
    markdown
  </div>
</template>

<style scoped>
.markdown-badge {
  background-color: var(--badge-markdown-bg);
  color: var(--badge-markdown-text);
}

.small-svg-styling {
  color: var(--badge-markdown-text);
}
</style>
