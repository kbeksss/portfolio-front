import { baseApi } from "shared/api/xhr/rtk";

export const projectApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getProjects: build.query({
      query: () => ({
        url: "/projects",
      }),
    }),
  }),
});

export const { useGetProjectsQuery } = projectApi;
