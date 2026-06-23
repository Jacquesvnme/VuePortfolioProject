<script setup>
import ThreeSectionLayout from '../../../old/Layouts/ThreeSectionLayout.vue'
import TopBar from '../../Components/Bar/TopBar.vue'
import SmallSpacer from '../../Components/Spacers/SmallSpacer.vue'
</script>

<template>
  <ThreeSectionLayout>
    <div class="TopBar">
      <TopBar to="/Academic-History" label="Academic-History" />
    </div>
    <SmallSpacer />
    <div class="card">
      <p class="eyebrow">Academic History</p>
      <p>This section is still being implemented.</p>
    </div>
  </ThreeSectionLayout>
</template>
