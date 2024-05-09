<template>
  <div>
    <Header></Header>
    <Carousel></Carousel>
  </div>
  <router-view />
</template>

<script setup>
import Header from "./components/Header.vue";
import Carousel from "./components/Carousel.vue";
import { ref } from 'vue';

</script>

<style module>

</style>