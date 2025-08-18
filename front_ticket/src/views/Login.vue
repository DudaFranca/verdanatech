<template>
  <div class="flex justify-center items-center bg-[url(public/back_login.png)] bg-cover w-full h-full">
    <div class="bg-white w-[500px] px-20 py-10 rounded-xl">
      <h1 class="text-2xl font-bold text-center">Login</h1>
      <form @submit.prevent="submitLogin" class="max-w-sm mx-auto">
        <div class="mb-5">
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Email</label>
          <input v-model="email" type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#2C5549] focus:border-[#2C5549] block w-full p-2.5" required />
        </div>
        <div class="mb-5">
          <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Senha</label>
          <input v-model="password" type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#2C5549] focus:border-[#2C5549] block w-full p-2.5" required />
        </div>
        <button type="submit" class="text-white bg-[#2C5549] hover:bg-[#2C5549] focus:ring-4 focus:outline-none focus:ring-[#2C5549] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Entrar</button>
      </form>
      <p v-if="validateCredentials" class="text-red-700">Usuário e/ou senha inválidos.</p>
    </div>    
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { useAuth } from '../composables/useAuth';
  
  const email = ref('')
  const password = ref('')
  const validateCredentials = ref(false)
  
  const { login } = useAuth();
  const router = useRouter();
  
  const toggleValidate = () => {
    validateCredentials.value = !validateCredentials.value;
  };

  const submitLogin = async () => {
      try {
        await login({ email: email.value, password: password.value });
        router.push('/home');
      } catch (error) {
        toggleValidate()
        console.error('Login falhou', error);
      }
  };
</script>