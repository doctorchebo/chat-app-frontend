import api from "@/api/api";
import { AppDispatch } from "../types";
import { loading, setChats, setError } from "./chatSlice";
import { setMessages } from "../message/messageSlice";

export const getChats = (endpoint: string) => async (dispatch: AppDispatch) => {
  dispatch(loading(true));
  try {
    const response = await api.get(endpoint);
    dispatch(setChats(response.data));
  } catch (error) {
    dispatch(loading(false));
    dispatch(
      setError(
        error instanceof Error ? error.message : "Error while fetching chats"
      )
    );
  } finally {
    dispatch(loading(false));
  }
};
