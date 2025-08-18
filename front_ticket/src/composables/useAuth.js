import { useAuthStore } from '../store/authStore';

export function useAuth() {
  const authStore = useAuthStore();

  const login = async (credentials) => {
    await authStore.login(credentials);
  };

  const logout = () => {
    authStore.logout();
  };

  return {
    login,
    logout,
    isAuthenticated: authStore.isAuthenticated,
    user: authStore.user,
  };
}
