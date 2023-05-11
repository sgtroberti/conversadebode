import client from "./client";

export const login = (data) => client.post("/auth/auth", data);

export const getFromStorage = (key) => JSON.parse(localStorage.getItem(key));

export const setInStorage = (key, data) =>
  localStorage.setItem(key, JSON.stringify(data));
