import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import api from '../services/axios';
import { toast } from 'vue3-toastify';
import router from '../router';

export const useTicketsStore = defineStore('tickets', {
  state: () => ({
    tickets: [],
    newForm: {
      title: '',
      name_applicant: '',
      category: '',
      description: '',
      priority: '',
      status: 'open',
    },
    isEdit: false,
    editId: null,
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

    async ticketsSaveAction(payload) {
      try {
        await api.post('/tickets', payload);
        await this.getTicketsAction();
        toast.success('Chamado salvo com sucesso!', {
          position: 'top-center',
          autoClose: 1000,
        });
        this.clearFormAction();
        router.push('/home');
      } catch (error) {
        toast.error('Erro ao salvar ticket!', {
          position: 'top-center',
          autoClose: 1000,
        });
        console.error(error);
      }
    },

    async ticketsEditAction(payload) {
      try {
        await api.post(`/tickets/${payload.id}`, payload);
        await this.getTicketsAction();
        toast.success('Chamado salvo com sucesso!', {
          position: 'top-center',
          autoClose: 1000,
        });
        router.push('/home');
      } catch (error) {
        toast.error('Erro ao editar ticket!', {
          position: 'top-center',
          autoClose: 1000,
        });
        console.error(error);
      }
    },

    async clearFormAction() {
      this.newForm = {
        title: '',
        name_applicant: '',
        category: '',
        description: '',
        priority: '',
        status: 'open',
      };
      this.isEdit = false;
      this.editId = null;
    },
  },
});
