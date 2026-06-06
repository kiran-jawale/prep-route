import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig } from 'axios'


// API Configuration - Centralized axios instance with proper typing


// api configuration for api interaction
const apiConfig: AxiosRequestConfig = {
  baseURL: import.meta.env.BASE_URL || "/api/v1",
  withCredentials: true,
};

const api: AxiosInstance = axios.create(apiConfig);

export default api;