import axios from "axios";
import { getFromStorage } from "./auth";

const baseURL = process.env.REACT_APP_API_URL || "http://localhost:3001";

const client = axios.create({
  baseURL,
  maxContentLength: 4194304,
});

client.interceptors.request.use((config) => {
  const user = getFromStorage("user");

  return {
    ...config,
    headers: {
      ...config.headers,
      Authorization: user?.accessToken ? `Bearer ${user?.accessToken}` : "",
    },
  };
});

export default client;

//API https://conversadebode-back.onrender.com:10000
