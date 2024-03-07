import { RootState } from "@/redux/rootReducer";
import axios from "axios";
import { useSelector } from "react-redux";
import * as SecureStore from 'expo-secure-store';

const api = axios.create({
  baseURL: "http://192.168.1.7:8080/api", // Set your base URL here
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

api.interceptors.request.use(
  (config) => {
    const authToken = getToken();
    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const getToken = () => {
  let authToken = SecureStore.getItem("authToken");
  if (authToken) {
    return authToken;
  }
};

export default api;
