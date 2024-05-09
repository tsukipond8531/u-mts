module.exports = {};
const Vue = require('vue');
const PrimeVueButton = require('primevue/button').default;
const PrimeVueInputText = require('primevue/inputtext').default;
const PrimeVueCarrossel = require('primevue/carousel').default;

Vue.GlobalComponents = {
  Button: PrimeVueButton,
  InputText: PrimeVueInputText,
  Carousel: PrimeVueCarrossel
};
