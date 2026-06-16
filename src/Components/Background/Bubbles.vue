<!-- Fullscreen AI Prompted Bubble Background -->

<template>
  <div class="bubble-container">
    <div
      v-for="bubble in bubbles"
      :key="bubble.id"
      :class="['bubble', `drift-${bubble.driftVariation}`]"
      :style="{
        left: bubble.startX + '%',
        width: bubble.size + 'px',
        height: bubble.size + 'px',
        animationDuration: bubble.duration + 's',
        animationDelay: bubble.delay + 's',
      }"
    ></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const bubbles = ref([])

onMounted(() => {
  generateBubbles()
})

function generateBubbles() {
  const bubbleCount = 50
  const newBubbles = []

  for (let i = 0; i < bubbleCount; i++) {
    const duration = Math.random() * (30 - 15) + 15
    newBubbles.push({
      id: i,
      startX: Math.random() * 100,
      size: Math.random() * (80 - 20) + 20,
      duration,
      // Negative delay places bubble mid-animation so screen fills immediately on load
      delay: -(Math.random() * duration),
      driftVariation: Math.floor(Math.random() * 3) + 1,
    })
  }

  bubbles.value = newBubbles
}
</script>

<style scoped>
.bubble-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
  z-index: 0;
}

.bubble {
  position: absolute;
  bottom: -150px;
  border-radius: 50%;
  pointer-events: none;
  /* Outer body: very faint teal fill */
  background: radial-gradient(
    circle at 35% 35%,
    rgba(26, 188, 156, 0.11) 0%,
    rgba(26, 188, 156, 0.04) 55%,
    rgba(26, 188, 156, 0.008) 100%
  );
  /* Glass rim + specular highlight */
  box-shadow:
    inset 0 0 0 1px rgba(26, 188, 156, 0.12),
    inset 5px 5px 14px rgba(255, 255, 255, 0.07),
    inset -3px -3px 10px rgba(26, 188, 156, 0.045),
    0 3px 16px rgba(26, 188, 156, 0.035);
  backdrop-filter: blur(3px);
  filter: blur(1px);
}

.drift-1 {
  animation: drift1 linear infinite;
}

.drift-2 {
  animation: drift2 linear infinite;
}

.drift-3 {
  animation: drift3 linear infinite;
}

@keyframes drift1 {
  0% {
    transform: translateY(0) translateX(0);
    opacity: 0.58;
  }
  50% {
    transform: translateY(-50vh) translateX(40px);
    opacity: 0.58;
  }
  100% {
    transform: translateY(-100vh) translateX(80px);
    opacity: 0;
  }
}

@keyframes drift2 {
  0% {
    transform: translateY(0) translateX(0);
    opacity: 0.54;
  }
  50% {
    transform: translateY(-50vh) translateX(-50px);
    opacity: 0.54;
  }
  100% {
    transform: translateY(-100vh) translateX(-100px);
    opacity: 0;
  }
}

@keyframes drift3 {
  0% {
    transform: translateY(0) translateX(0);
    opacity: 0.5;
  }
  50% {
    transform: translateY(-50vh) translateX(20px);
    opacity: 0.5;
  }
  100% {
    transform: translateY(-100vh) translateX(-30px);
    opacity: 0;
  }
}
</style>
