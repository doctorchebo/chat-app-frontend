import api from "@/api/api";
import { AppDispatch } from "../types";
import {
  loading,
  setChats,
  setChatDetails,
  removeChat,
  setError,
} from "./chatSlice";

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

export const getChatDetails =
  (chatId: string) => async (dispatch: AppDispatch) => {
    dispatch(loading(true));
    try {
      const response = await api.get(`/chat/getChatDetails/${chatId}`);
      if (response.status === 200) {
        dispatch(setChatDetails(response.data));
      }
    } catch (error) {
      dispatch(
        setError(
          error instanceof Error
            ? error.message
            : "Error while fetching chat with id " + chatId
        )
      );
    } finally {
      dispatch(loading(false));
    }
  };

export const deleteChat = (id: string) => async (dispatch: AppDispatch) => {
  dispatch(loading(true));
  try {
    console.log("trying to remove chat with id " + id);
    const response = await api.delete(`/chat/delete/${id}`);
    if (response.status === 200) {
      dispatch(removeChat(response.data));
    }
  } catch (error) {
    dispatch(loading(false));
    dispatch(
      setError(
        error instanceof Error
          ? error.message
          : "Error while removing chat with id " + id
      )
    );
  } finally {
    dispatch(loading(false));
  }
};
