import { axiosRequest } from "../axios";
import { createApi } from "@reduxjs/toolkit/query/react";
import { removeTokens } from "../helpers";

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

export const baseQueryWithReAuth = async (args, api) => {
  const currentArgs = { ...args, data: args.body };
  let result = await axiosBaseQuery(currentArgs);
  if (result.error && result.error.status === 403) {
    removeTokens();
  }
  return result;
};

export const baseQuery = baseQueryWithReAuth;

export const baseApi = createApi({
  baseQuery,
  endpoints: () => ({}),
});
