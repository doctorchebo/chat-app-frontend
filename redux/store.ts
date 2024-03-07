// store.ts
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import chatReducer from './chat/chatSlice'
import messageReducer from './message/messageSlice'
import contactReducer from './contact/contactSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    chat: chatReducer,
    message: messageReducer,
    contact: contactReducer
  },
});

export default store;
