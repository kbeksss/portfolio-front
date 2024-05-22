import { combineReducers } from "@reduxjs/toolkit";
import projects from "app/entities/projects";
import { projectApi } from "shared/api/services/projectApi";
import { usersApi } from "shared/api/services/usersApi";

export const rootReducer = combineReducers({
  projects,
  [projectApi.reducerPath]: projectApi.reducer,
  [usersApi.reducerPath]: usersApi.reducer,
});
