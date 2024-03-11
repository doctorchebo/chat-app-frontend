import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Chat } from "../../types/ChatTypes";
interface ChatState {
  chats: Chat[];
  loading: boolean;
  error: string | null;
  currentChatDetails: Chat | null;
}

const initialState: ChatState = {
  chats: [],
  loading: false,
  error: null,
  currentChatDetails: null,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setChats(state, action: PayloadAction<Chat[]>) {
      state.chats = action.payload;
    },
    loading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    removeChat(state, action: PayloadAction<Chat>) {
      state.chats = state.chats
        .filter((chat) => chat.id !== action.payload.id)
        .map((chat) => chat);
    },
    setChatDetails(state, action: PayloadAction<Chat>) {
      state.currentChatDetails = action.payload;
    },
  },
});

export const { setChats, removeChat, loading, setError, setChatDetails } =
  chatSlice.actions;
export default chatSlice.reducer;
