<script setup>
import AngleRight from '../Svg/Functional/AngleRight.vue'
import SmallSpacer from '../Spacers/SmallSpacer.vue'

//TODO I want to add two more things here
//- An icon and icon property that will allow me to pass in an icon component to be displayed on the left side of the card
//- A seperator line that will sit to the right of this icon
//- Remove the AngleRight icon completely
</script>

<template>
  <nav class="link-list">
    <div class="card">
      <RouterLink class="link" :to="'/About-Me'">
        <AngleRight class="small-svg-styling" />
        About Me
      </RouterLink>
      <div><i>Learn more about me, my background and contact details.</i></div>
    </div>

    <SmallSpacer />

    <div class="card">
      <RouterLink class="link" :to="'/Skills'">
        <AngleRight class="small-svg-styling" />
        Skills
      </RouterLink>
      <div><i>Learn more about my skills and expertise.</i></div>
    </div>

    <SmallSpacer />

    <div class="card">
      <RouterLink class="link" :to="'/Details'">
        <AngleRight class="small-svg-styling" />
        Details
      </RouterLink>
      <div><i>Get detailed information about me and the things I love.</i></div>
    </div>

    <SmallSpacer />

    <div class="card">
      <RouterLink class="link" :to="'/Academic-History'">
        <AngleRight class="small-svg-styling" />
        Academic History
      </RouterLink>
      <div><i>Learn more about my academic background and achievements.</i></div>
    </div>
  </nav>
</template>

<style scoped>
.small-svg-styling {
  margin-right: 0.5rem;
}

.link-list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.card {
  padding: 1rem !important;
}
</style>
