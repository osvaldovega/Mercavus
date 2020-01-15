import { AppActions } from "../types/appActions";
import { HANDLE_ERROR } from "../types/error/errorActions";

export const updateError = (status: boolean): AppActions => ({
  type: HANDLE_ERROR,
  status,
});
