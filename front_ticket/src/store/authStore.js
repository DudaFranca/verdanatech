import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import api from '../services/axios';
import { toast } from 'vue3-toastify';
import authService from '../services/authService';
import router from '../router';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: localStorage.getItem('token') || null,
    isAuthenticated: !!localStorage.getItem('token'),
  }),

  getters: {
    getUser: (state) => state.user,
  },

  actions: {
    async login(credentials) {
      try {
        const response = await authService.login(credentials);

        if (!response.status) {
          throw error;
        }
        this.user = response.user;
        this.token = response.token;
        this.isAuthenticated = true;
        localStorage.setItem('token', this.token);
      } catch (error) {
        console.log('Não foi possível fazer login');
        throw error;
      }
    },
    logout() {
      this.user = null;
      this.token = null;
      this.isAuthenticated = false;
      localStorage.removeItem('token');

      router.push('/login');
    },
    async checkAuth() {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const user = await authService.getUser();
          this.user = user;
          this.isAuthenticated = true;
        } catch (error) {
          this.logout();
        }
      }
    },
  },
});
