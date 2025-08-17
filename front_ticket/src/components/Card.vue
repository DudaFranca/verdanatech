<template>
  <div class="block max-w-sm p-6 m-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{{ ticket.title }}</h5>
    <p class="font-normal text-gray-700">{{ ticket.description }}</p>
    {{ ticket }}
    <!-- <p class="font-normal text-gray-500">Status: {{ statusColors}}</p> -->
  </div>
</template>

<script setup>
  import { defineProps, computed } from 'vue';
  
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
</script>