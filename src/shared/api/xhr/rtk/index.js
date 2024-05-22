import { axiosRequest } from "../axios";
import { createApi } from "@reduxjs/toolkit/query/react";

const axiosBaseQuery = async ({ url, method, data, params }) => {
  try {
    const result = await axiosRequest({ url, method, data, params });
    return { data: result };
  } catch (axiosError) {
    return {
      error: axiosError.response,
    };
  }
};

export const baseApi = createApi({
  baseQuery: axiosBaseQuery,
  endpoints: () => ({}),
});
