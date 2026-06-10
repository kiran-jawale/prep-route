

import axios from "axios";

declare module "axios" {
  export interface AxiosRequestConfig {
    metadata?: {
      startTime: Date;
    };

    _retry?: boolean;
  }
}

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  config.metadata = {
    startTime: new Date(),
  };

  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  const timestamp = config.metadata.startTime.toISOString();

  console.log(
    `\n[🚀 Frontend Req] ${timestamp} | ${config.method?.toUpperCase()} ${config.url}\n`
  );

  return config;
});

api.interceptors.response.use(
  (response) => {
    const endTime = new Date();

    const duration =
      endTime.getTime() - response.config.metadata!.startTime.getTime();

    console.log(
      `\n[✅ Frontend Res] ${endTime.toISOString()} | ${response.config.method?.toUpperCase()} ${response.config.url} - Status: ${response.status} (${duration}ms)\n`
    );

    return response;
  },

  async (error) => {
    const config = error.config;

    const endTime = new Date();

    const duration = endTime.getTime() - config.metadata.startTime.getTime();

    console.error(
      `\n[❌ Frontend Err] ${endTime.toISOString()} | ${config.method?.toUpperCase()} ${config.url} - Status: ${error.response?.status} (${duration}ms)\n`
    );

    if (error.response?.status === 401 && !config._retry) {
      config._retry = true;

      try {
        const response = await axios.post(
          `${import.meta.env.VITE_API_URL}/auth/refresh-token`,
          {},
          {
            withCredentials: true,
          }
        );

        const accessToken = response.data.data.accessToken;

        localStorage.setItem("accessToken", accessToken);

        config.headers.Authorization = `Bearer ${accessToken}`;

        return api(config);
      } catch {
        localStorage.removeItem("accessToken");
      }
    }

    return Promise.reject(error);
  }
);

export default api;
