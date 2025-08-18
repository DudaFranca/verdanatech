<template>
  <div class="block max-w-sm p-6 m-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100">
    <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900">{{ ticket.title }}</h5>
    <p class="text-sm mb-2">Por: {{ ticket.name_applicant }}</p>
    <p class="font-normal text-gray-700 mb-2"><strong>Categoria: </strong>{{ ticket.category }}</p>
    <p class="font-normal text-gray-700 mb-2"><strong>Descrição: </strong>{{ ticket.description }}</p>
    <p class="font-normal text-gray-700 mb-2"><strong>Prioridade: </strong>{{ ticket.priority }}</p>
    <p class="font-normal mt-2 mb-4">
      <strong>Status: </strong>
      <span v-if="ticket.status == 'open'" :class="statusColors">Aberto</span>
      <span v-else-if="ticket.status == 'in_progress'" :class="statusColors">Em Progresso</span>
      <span v-else-if="ticket.status == 'closed'" :class="statusColors"> Fechado</span>
    </p>
    <button @click="edit(ticket)" type="button" class="text-white bg-[#2C5549] hover:bg-[#4d947f] focus:ring-4 focus:ring-[#4d947f] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none">Editar</button>
  </div>
</template>

<script setup>
  import { defineProps, computed } from 'vue';
  import { useTicketsStore } from '../store/ticketsStore';
  import { useRouter } from 'vue-router';

  const ticketStore = useTicketsStore();
  const router = useRouter()
  
  const props = defineProps({
    ticket: {
      type: Object,
      required: true
    }
  });

  const statusColors = computed(() => {
    switch (props.ticket.status) {
      case 'open':
        return 'text-green-500';
      case 'in_progress':
        return 'text-yellow-500';
      case 'closed':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  });

  const edit = (payload) => {
    ticketStore.newForm = {
      ...payload
    };
    ticketStore.isEdit = true;
    ticketStore.editId = payload.id;
    router.push('/edit');
  }
</script>