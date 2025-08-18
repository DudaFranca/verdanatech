import api from 'axios';

const API_URL = 'http://localhost:8000/api';

export default {
  async login(credentials) {
    const response = await api.post(`${API_URL}/login`, credentials);
    return response.data;
  },
  async getUser() {
    const token = localStorage.getItem('token');

    if (!token) throw new Error('Token not found');

    const response = await api.get(`${API_URL}/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  },
};
