<script setup>
defineProps({
  to: { type: String, required: true },
  label: { type: String, required: true },
})
</script>

<template>
  <div class="compact-card">
    <RouterLink :to="'/'" class="link">Home</RouterLink>
    <div class="trailing-spaces">/</div>
    <RouterLink :to="'/Portfolio-Dashboard'" class="link">Portfolio-Dashboard</RouterLink>
    <div class="trailing-spaces">/</div>
    <RouterLink :to="to" class="link">{{ label }}</RouterLink>
  </div>
</template>

<style scoped>
.compact-card {
  width: 100%;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.12) 0%,
    rgba(255, 255, 255, 0.05) 50%,
    rgba(255, 255, 255, 0.08) 100%
  );
  backdrop-filter: blur(12px);
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2),
    inset 0 -1px 0 rgba(255, 255, 255, 0.05);

  margin-top: -20px;
  height: 10px !important;
  border-radius: 4px !important;
  padding: 12px !important;
  display: flex;
  align-items: center;
}

.trailing-spaces {
  margin-right: 0.5rem;
  margin-left: 0.5rem;
}
</style>
