import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://challenge.crossmint.io/api/',
});

api.interceptors.request.use(
  (config) => {
    config.data = {
      ...config.data,
      candidateId: 'd3c5ae3d-efd8-4a9b-acee-3661450db75d',
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
