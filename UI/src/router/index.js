import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import UserLogin from '../components/UserLogin.vue';
import UserSignup from '../components/UserSignup.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/login', component: UserLogin },
  { path: '/signup', component: UserSignup },
  // New catch-all route format
  { path: '/:pathMatch(.*)*', redirect: '/login' }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
