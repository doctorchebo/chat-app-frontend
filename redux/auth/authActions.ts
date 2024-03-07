import setupAxiosInterceptors from "@/utils/setupAxiosInterceptors";
import { AppDispatch } from "../types";
import { login, loginFailure, loginStart, userData } from "./authSlice";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import api from "@/api/api";
export const loginUser =
  ({ username, password }: { username: string; password: string }) =>
  async (dispatch: AppDispatch) => {
    dispatch(loginStart());
    try {
      const response = await api.post(
        `http://192.168.1.7:8080/api/auth/login`,
        { username, password }, // Pass username and password directly as data
        {
          withCredentials: true,
        } // Include headers directly in the config
      );
      dispatch(login(response.data));
      if (response.data.authenticationToken) {
        saveToken("authToken", response.data.authenticationToken);
      }
      setupAxiosInterceptors();
      dispatch(getCurrentUserData());
    } catch (error) {
      dispatch(loginFailure());
      console.error("Login error:", error);
    }
  };

const saveToken = (key: string, value: string) => {
  SecureStore.setItem(key, value);
};

export const getCurrentUserData = () => async (dispatch: AppDispatch) => {
  try {
    const response = await api.get(
      `http://192.168.1.7:8080/api/user/getCurrentUser`
    );
    dispatch(userData(response.data));
    console.log(response.data);
  } catch (error) {
    console.error("Error fetching current user data:", error);
  }
};
