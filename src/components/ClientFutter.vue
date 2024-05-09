<template>
  <div class="container-fluid">
    <div class="d-flex justify-content-between">
      <div class="carousel-container">
        <div class="carousel-track" :style="{ transform: `translateX(${translateValue}px)`, transition: `${transitionDuration}s ease-in-out` }">
          <div
            v-for="(index, imageIndex) in Array.from({ length: 40 })"
            :key="index"
            class="image-container"
          >
          
            <img :src="`https://picsum.photos/120?random=${imageIndex}`" alt="" class="rounded-circle">

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const translateValue = ref(0);
const transitionDuration = 1;
const imageWidth = 120; 
const spacing = 50; 

const startCarousel = () => {
  setInterval(() => {
    translateValue.value -= imageWidth + spacing;
    if (translateValue.value < -((imageWidth + spacing) * 20)) {
      translateValue.value = 0;
    }
  }, 1000); 
};

onMounted(startCarousel);
</script>

<style scoped>
.carousel-container {
  overflow: hidden;
}

.carousel-track {
  display: flex;
}

.image-container {
  margin-right: 70px;
  border-radius: 50%;
}

.image-container:last-child {
  margin-right: 0;
}
</style>
