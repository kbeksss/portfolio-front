import { store } from "app/store";
import React from "react";
import { Provider } from "react-redux";

export const withStore = (component) => () => (
  <Provider store={store}>{component()}</Provider>
);
