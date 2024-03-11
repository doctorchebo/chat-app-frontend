import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Message {
  id: number;
  chatId: number;
  recipientIds: number[];
  messageType: "TEXT" | "MULTIMEDIA" | "FILE";
  content: "string";
  created: number;
}

interface MessageState {
  messages: Message[];
  loading: boolean;
  error: string | null;
  lastMessagesForChats: Message[];
}

const initialState: MessageState = {
  messages: [],
  loading: false,
  error: null,
  lastMessagesForChats: [],
};

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    setMessages: (state, action: PayloadAction<Message[]>) => {
      state.messages = action.payload;
    },
    addMessage: (state, action: PayloadAction<Message>) => {
      state.messages = [...state.messages, action.payload];
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    setLastMessages: (state, action: PayloadAction<Message[]>) => {
      state.lastMessagesForChats = action.payload;
    },
  },
});

export const {
  setMessages,
  addMessage,
  setLoading,
  setError,
  setLastMessages,
} = messageSlice.actions;

export default messageSlice.reducer;
