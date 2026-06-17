<script setup>
import ThreeSectionLayout from '../../Layouts/ThreeSectionLayout.vue'
import TopBar from '../../Components/Bar/TopBar.vue'
import SmallSpacer from '../../Components/Spacers/SmallSpacer.vue'
</script>

<template>
  <ThreeSectionLayout>
    <TopBar to="/About-Me" label="About-Me" />
    <SmallSpacer />
    <div class="card">
      <p class="eyebrow">About Me</p>
      <p>This section is still being implemented.</p>
    </div>
  </ThreeSectionLayout>
</template>
