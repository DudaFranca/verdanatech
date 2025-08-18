import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '../views/layouts/MainLayout.vue';
import Home from '../views/Home.vue';
import Ticket from '../views/NewTicket.vue';
import Login from '../views/Login.vue';
import AuthLayout from '../views/layouts/AuthLayout.vue';

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '/home',
        component: Home,
      },
      {
        path: '/new',
        component: Ticket,
      },
    ],
  },

  {
    path: '/login',
    component: AuthLayout,
    children: [
      {
        path: '',
        component: Login,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
