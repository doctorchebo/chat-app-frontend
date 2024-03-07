// authenticationSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isAuthenticated: boolean;
  authenticationToken: string | null;
  refreshToken: string | null;
  username: string | null;
  expiresAt: number | null;
  loading: boolean,
  id: number | null;
  email: string | null;
  enabled: boolean;
}

const initialState: AuthState = {
  isAuthenticated: false,
  authenticationToken: null,
  refreshToken: null,
  username: null,
  expiresAt: null,
  loading: false,
  id: null,
  email: null,
  enabled: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action: PayloadAction<AuthState>) {
      state.isAuthenticated = true;
      state.authenticationToken = action.payload.authenticationToken;
      state.refreshToken = action.payload.refreshToken;
      state.username = action.payload.username;
      state.expiresAt = action.payload.expiresAt;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.authenticationToken = null;
      state.refreshToken = null;
      state.username = null;
      state.expiresAt = null;
    },
    loginStart(state) {
      state.loading = true;
    },
    loginSuccess(state) {
      state.loading = false;
      state.isAuthenticated = true;
      // update other fields as needed
    },
    loginFailure(state) {
      state.loading = false;
      // handle failure state
    },
    userData(state, action: PayloadAction<AuthState>){
      state.id = action.payload.id,
      state.username = action.payload.username,
      state.enabled = action.payload.enabled,
      state.email = action.payload.email
    }
  },
});

export const { login, logout, loginStart, loginSuccess, loginFailure, userData } = authSlice.actions;
export default authSlice.reducer;
  
