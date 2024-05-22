import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers";
import { projectApi } from "shared/api/services/projectApi";
import { usersApi } from "shared/api/services/usersApi";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(projectApi.middleware, usersApi.middleware),
});
