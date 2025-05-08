import axios from 'axios';

const api = axios.create({
  baseURL: 'https://connectify-backend-9zxl.onrender.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    // You can modify the request config here if needed
    return config;
  },
  (error) => {
    // Handle the error
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    // You can modify the response here if needed
    return response;
  },
  (error) => {
    // Handle the error
    return Promise.reject(error);
  }
);

export default api;
