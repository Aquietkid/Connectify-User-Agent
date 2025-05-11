import axios from 'axios';

const api = axios.create({
  baseURL: 'https://connectify-backend-9zxl.onrender.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true
});

// Create a separate instance for Postman API
const postmanApi = axios.create({
  baseURL: 'https://api.getpostman.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
    // 'X-Api-Key': 'PMAK-65c0c0c0c0c0c0c0c0c0c0c0-1234567890abcdef1234567890abcdef1234' // Replace with your actual Postman API key
  },
  withCredentials: false
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

export { api, postmanApi };
