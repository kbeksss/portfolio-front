import { baseApi } from "shared/xhr/rtk";

export const projectApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    get: build.query({
      query: () => ({
        url: "/auth/users/me",
      }),
    }),
    updateMe: build.mutation({
      query: (body) => ({
        url: "/users/me",
        method: "PATCH",
        body,
      }),
    }),
  }),
});
