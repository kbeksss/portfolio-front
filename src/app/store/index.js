import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers";
import { projectApi } from "shared/api/services/projectApi.js";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(projectApi.middleware),
});
