// rootReducer.ts
import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice"; // Import your authentication slice reducer here
import chatReducer from "./chat/chatSlice";
import messageReducer from "./message/messageSlice"
import contactReducer from "./contact/contactSlice"

const rootReducer = combineReducers({
  auth: authReducer,
  chat: chatReducer,
  message: messageReducer,
  contact: contactReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
