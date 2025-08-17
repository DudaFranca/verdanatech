import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import api from '../services/axios';

export const useTicketsStore = defineStore('tickets', {
  state: () => ({
    tickets: [],
  }),

  actions: {
    async getTicketsAction() {
      try {
        const response = await api.get('/tickets');
        this.tickets = response.data;
      } catch (error) {
        console.error('Error:', error);
      }
    },
  },
});
