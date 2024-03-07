import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Contact {
  id: number;
  username: string;
  email: string;
  created: number;
  enabled: boolean;
}

interface ContactState {
  contacts: Contact[];
  loading: boolean;
  error: string | null
}

const initialState: ContactState = {
  contacts: [],
  loading: false,
  error: null
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    setContacts: (state, action: PayloadAction<Contact[]>) => {
      state.contacts = action.payload;
    },
    setLoading : (state, action: PayloadAction<boolean>) =>{
        state.loading = action.payload;
    },
    setError: (state, action : PayloadAction<string>) => {
        state.error = action.payload
    }
  },
});

export const { setContacts, setLoading, setError } = contactSlice.actions;
export default contactSlice.reducer;
