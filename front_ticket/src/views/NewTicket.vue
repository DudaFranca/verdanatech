<template>
  <div>
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center mt-6">
      {{ ticketStore.isEdit ? "Editar Chamado" : "Novo Chamado" }}
    </h5>

    <form class="max-w-xl mx-auto mt-4" @submit.prevent="save">
      <div class="mb-5">
        <label for="title" class="block mb-2 text-sm font-medium text-gray-900">Titulo do Chamado</label>
        <input
          v-model="ticketStore.newForm.title"
          id="title"
          type="text"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                 focus:ring-[#2C5549] focus:border-[#2C5549] block w-full p-2.5"
          required
        />
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="mb-5">
          <label for="name" class="block mb-2 text-sm font-medium text-gray-900">Criador do chamado</label>
          <input
            v-model="ticketStore.newForm.name_applicant"
            id="name"
            type="text"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                   focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>

        <div class="mb-5">
          <label for="category" class="block mb-2 text-sm font-medium text-gray-900">Categoria</label>
          <input
            v-model="ticketStore.newForm.category"
            id="category"
            type="text"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                   focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>

        <div class="mb-5">
          <label for="states" class="block mb-2 text-sm font-medium text-gray-900">Status</label>
          <select
            v-model="ticketStore.newForm.status"
            id="states"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                   focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option value="open">Aberto</option>
            <option value="in_progress">Em progresso</option>
            <option value="closed">Fechado</option>
          </select>
        </div>

        <div class="mb-5">
          <label for="priority" class="block mb-2 text-sm font-medium text-gray-900">Prioridade</label>
          <select
            v-model="ticketStore.newForm.priority"
            id="priority"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                   focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option value="Baixa">Baixa</option>
            <option value="Media">Média</option>
            <option value="Alta">Alta</option>
          </select>
        </div>
      </div>

      <div class="mb-5">
        <label for="description" class="block mb-2 text-sm font-medium text-gray-900">Descrição</label>
        <textarea
          v-model="ticketStore.newForm.description"
          id="description"
          rows="6"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                 focus:ring-[#2C5549] focus:border-[#2C5549] block w-full p-2.5"
        ></textarea>
      </div>

      <button
        type="submit"
        class="text-white bg-[#2C5549] hover:bg-[#4d947f] focus:ring-4 focus:ring-[#4d947f] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
      >
        {{ ticketStore.isEdit ? "Salvar Alterações" : "Salvar" }}
      </button>
    </form>
  </div>
</template>

<script setup>
import { useTicketsStore } from '../store/ticketsStore';
import { onMounted } from 'vue';
import { useRoute } from "vue-router"

const route = useRoute();
const ticketStore = useTicketsStore();

const save = () => {
  if (ticketStore.isEdit) {
    ticketStore.newForm.id = ticketStore.editId;
    ticketStore.ticketsEditAction(ticketStore.newForm);
  } else {
    ticketStore.ticketsSaveAction(ticketStore.newForm);
  }
};

onMounted(() => {
  if (route.path === "/new") {
    ticketStore.clearFormAction();
  }
});
</script>
