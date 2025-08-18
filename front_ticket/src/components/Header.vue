<template>
  <header class="w-full bg-[#2C5549] p-4 shadow-md">
    <nav class="flex justify-center ">
      <RouterLink to="/home" class="text-xl font-bold text-white">Chamados</RouterLink>
      <RouterLink to="/new" @click="ticketStore.clearFormAction" class="text-xl font-bold text-white mx-6">Novo chamado</RouterLink>
      <button @click="handleLogout" class="text-xl font-bold text-white">Sair</button>

    </nav>
  </header>
</template>

<script setup>
  import { useAuthStore } from '../store/authStore'
  import { useTicketsStore } from '../store/ticketsStore';

  const authStore = useAuthStore();
  const ticketStore = useTicketsStore();

  function handleLogout() {
    authStore.logout();
  }
</script>