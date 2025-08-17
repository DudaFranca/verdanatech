import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Ticket from '../views/NewTicket.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/new', component: Ticket },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
