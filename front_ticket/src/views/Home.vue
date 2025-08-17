<template>
  <div>
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center mt-6">
      Chamados
    </h5>
    <div class="m-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div v-for="ticket in tickets" :key="ticket.id">
        <Card :ticket="ticket" />
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, onMounted, computed } from 'vue'
  import { useTicketsStore } from '../store/tickets';
  import Card from '../components/Card.vue';
  
  const ticketStore = useTicketsStore();
  const tickets = computed(() => ticketStore.tickets || "");

  onMounted(async () => {
    ticketStore.getTicketsAction();
  })
  
</script>
