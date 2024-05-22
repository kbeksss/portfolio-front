import { TOKEN } from "shared/constants.js";

export const getLocalToken = () => localStorage.getItem(TOKEN);

export const saveTokenToLocal = (token) => localStorage.setItem(TOKEN, token);

export const removeTokens = () => localStorage.removeItem(TOKEN);
