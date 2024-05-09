<template>
  <div id="myCarousel" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="image-background">
          <img src="../assets/logo.png" alt="Logo" class="carousel-logo">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.image-background {
  position: relative;
  width: 100%;
  height: 800px;
  background-color: #32568047;
  background-image: url("https://picsum.photos/1920/1126");
  background-size: cover;
  background-position: center;
}

.carousel-logo {
  position: absolute;
  bottom: 200px; 
  left: 90%; 
  width: 150px; 
  height: auto;
}
</style>
