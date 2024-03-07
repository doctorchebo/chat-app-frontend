import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Chat {
  id: number;
  name: string;
  type: "GROUP" | "PRIVATE" | "CHANNEL";
  participantsIds: number[];
}

interface ChatState {
  chats: Chat[];
  loading: boolean;
  error : string | null;
}

const initialState: ChatState = {
  chats: [],
  loading: false,
  error: null
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
    setError(state, action: PayloadAction<string>){
      state.error = action.payload;
    }
  },
});

export const { setChats, loading, setError } = chatSlice.actions;
export default chatSlice.reducer;
