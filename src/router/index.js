import { createRouter, createWebHistory } from 'vue-router';
import store from '../store';
import Home from '../page/Home.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {

  if (to.meta.middleware) {
    const middleware = to.meta.middleware;
    middleware.forEach((mw) => mw(to, from, next));
  } else {
    next();
  }
});

export default router;
