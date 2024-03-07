import api from "@/api/api";
import { addMessage, setError, setLoading, setMessages } from "./messageSlice";
import { AppDispatch } from "../types";
import { MessageType } from "../../types/MessageTypes";

export const fetchConversation =
  (chatId: string) => async (dispatch: AppDispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await api.get(
        `/message/getAllMessagesByChatId/${chatId}`
      );
      dispatch(setMessages(response.data));
    } catch (error) {
      dispatch(
        setError(
          error instanceof Error
            ? error.message
            : "Error when fetching conversation"
        )
      );
    } finally {
      dispatch(setLoading(false));
    }
  };

export const sendMessage =
  ({ recipientIds, messageType, content }: MessageType) =>
  async (dispatch: AppDispatch) => {
    dispatch(setLoading(true));
    try {
      const data = {
        recipientIds: recipientIds,
        messageType: messageType,
        content: content,
      };
      const response = await api.post(`/message/send`, data);
      dispatch(addMessage(response.data));
    } catch (error) {
      dispatch(
        setError(
          error instanceof Error
            ? error.message
            : "Error when fetching conversation"
        )
      );
    } finally {
      dispatch(setLoading(false));
    }
  };
