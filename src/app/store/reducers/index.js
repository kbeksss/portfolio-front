import { combineReducers } from "@reduxjs/toolkit";
import projects from "app/entities/projects";
import { projectApi } from "../../../shared/api/services/projectApi.js";

export const rootReducer = combineReducers({
  projects,
  [projectApi.reducerPath]: projectApi.reducer,
});
