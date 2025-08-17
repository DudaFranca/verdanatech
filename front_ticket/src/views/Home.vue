<template>
  <div>
    <div v-for="ticket in tickets" :key="ticket.id">
      <Card :ticket="ticket" />
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
