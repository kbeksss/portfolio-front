import { baseApi } from "shared/api/xhr/rtk";

export const projectApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getProjects: build.query({
      query: () => ({
        url: "/api/projects",
      }),
    }),
    uploadProject: build.mutation({
      query: (body) => ({
        url: "/api/projects",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetProjectsQuery, useUploadProjectMutation } = projectApi;
