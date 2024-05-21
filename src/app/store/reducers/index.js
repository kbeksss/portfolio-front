import { combineReducers } from "@reduxjs/toolkit";
import projects from "app/entities/projects";

export const rootReducer = combineReducers({
  projects,
});
