import axios from 'axios';

const api = axios.create({
  baseURL: 'http://134.209.223.106/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// Request Interceptor
api.interceptors.request.use(
  (config) => {
    // Add authorization token if available
    const storedUserDetails = JSON.parse(localStorage.getItem('lezadaUser'))
    const token = storedUserDetails?.token

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Handle 401 Unauthorized
      if (error.response.status === 401) {
        console.error('Unauthorized! Logging out...');
      }
    }
    return Promise.reject(error);
  }
);

export default api;
