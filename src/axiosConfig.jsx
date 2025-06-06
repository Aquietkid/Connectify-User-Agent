import axios from 'axios';
import toast from 'react-hot-toast';
import { SERVER_URL } from './utils/constants';

const api = axios.create({
  baseURL: SERVER_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {

    if (response.data && response.data.success === false) {
      toast.error(response.data.message || 'Something went wrong');
      return null;
    }
    return response.data;
  },
  (error) => {

    const message = error.response?.data?.message || error.message || 'An unexpected error occurred';
    toast.error(message);
    return null;
  }
);

export default api;
