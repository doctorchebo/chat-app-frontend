import api from "@/api/api";
import { AppDispatch } from "../types";
import { setContacts, setLoading, setError } from "./contactSlice";

export const fetchContacts = (id: number) => async (dispatch: AppDispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await api.get(`/contact/getAllContacts/${id}`);
    if (response.status === 200) {
      dispatch(setContacts(response.data));
      dispatch(setLoading(false));
    }
  } catch (error) {
    dispatch(
      setError(
        error instanceof Error
          ? error.message
          : "An error occurred when fetching contacts"
      )
    );
  } finally {
    dispatch(setLoading(false));
  }
};
