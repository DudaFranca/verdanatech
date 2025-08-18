import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {},
});

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

const get = (url, params = {}) => apiClient.get(url, { params });
const post = (url, data) => apiClient.post(url, data);
const put = (url, data) => apiClient.put(url, data);
const remove = (url) => apiClient.delete(url);

export default {
  get,
  post,
  put,
  remove,
};
