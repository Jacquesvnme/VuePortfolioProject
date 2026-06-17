<script setup>
import ThreeSectionLayout from '../../Layouts/ThreeSectionLayout.vue'
import TopBar from '../../Components/Bar/TopBar.vue'
import SmallSpacer from '../../Components/Spacers/SmallSpacer.vue'
</script>

<template>
  <ThreeSectionLayout>
    <TopBar to="/Details" label="Details" />
    <SmallSpacer />
    <div class="card">
      <p class="eyebrow">Details</p>
      <p>This section is still being implemented.</p>
    </div>
  </ThreeSectionLayout>
</template>
