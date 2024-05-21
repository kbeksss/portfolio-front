import axios from "axios";
import { BASE_URL } from "shared/constants.js";
console.log(BASE_URL);

const axiosRequest = axios.create({
  baseURL: BASE_URL,
});

const getInterceptorResponse = (instance) => {
  instance.interceptors.response.use(
    (response) => {
      return response.data;
    },
    (error) => {
      return Promise.reject(error);
    },
  );
};

getInterceptorResponse(axiosRequest);

export { axiosRequest };
