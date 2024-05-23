import { baseApi } from "shared/api/xhr/rtk";

export const usersApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation({
      query: (body) => ({
        url: "/api/auth/login",
        method: "POST",
        body,
      }),
    }),
    checkAdmin: build.query({
      query: () => ({
        url: "/api/auth/check-admin",
      }),
    }),
  }),
});

export const { useLoginMutation, useCheckAdminQuery } = usersApi;
