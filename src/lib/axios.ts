import axios, { InternalAxiosRequestConfig } from "axios";

const baseURL = "";

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },

  withCredentials: true,
});

axiosInstance.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
axiosInstance.defaults.headers.post["Access-Control-Allow-Methods"] = "*";
axiosInstance.defaults.headers.post["Access-Control-Allow-Headers"] = "*";

const authInterceptor = (config: InternalAxiosRequestConfig) => {
  const token = "";
  if (token) {
    config.headers["Authorization"] = token;
  } else {
    config.headers["Authorization"] = "";
  }
  return config;
};

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  },
);
axiosInstance.interceptors.request.use(authInterceptor);

export default axiosInstance;
