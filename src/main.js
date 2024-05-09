import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import router from './router';

import './assets/css/style.css';
import 'primevue/resources/themes/aura-light-amber/theme.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "primeicons/primeicons.css";

const app = createApp(App);

app.use(PrimeVue);
app.use(router);
app.mount('#app');