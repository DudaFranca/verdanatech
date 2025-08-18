import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '../views/layouts/MainLayout.vue';
import Home from '../views/Home.vue';
import Ticket from '../views/NewTicket.vue';
import Login from '../views/Login.vue';
import AuthLayout from '../views/layouts/AuthLayout.vue';
import { useAuthStore } from '../store/authStore';

const routes = [
  {
    path: '/home',
    component: MainLayout,
    meta: { requiresAuth: true },
    children: [
      {
        path: '/home',
        component: Home,
      },
      {
        path: '/new',
        component: Ticket,
      },
      {
        path: '/edit',
        component: Ticket,
      },
    ],
  },

  {
    path: '/',
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

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore();

  if (!authStore.isAuthenticated) {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        await authStore.checkAuth(); // Tenta autenticar o usuário
      } catch (error) {
        console.error('Erro ao verificar autenticação', error);
      }
    }
  }

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next('/');
  } else {
    next();
  }
});

export default router;
