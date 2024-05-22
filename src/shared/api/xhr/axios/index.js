import axios from "axios";
import { BASE_URL, TOKEN } from "shared/constants.js";

const axiosRequest = axios.create({
  baseURL: BASE_URL,
});

const getInterceptorRequest = (instance) => {
  instance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem(TOKEN);
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};

const getInterceptorResponse = (instance) => {
  instance.interceptors.response.use(
    (response) => {
      return response.data;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};

getInterceptorResponse(axiosRequest);
getInterceptorRequest(axiosRequest);

export { axiosRequest };
