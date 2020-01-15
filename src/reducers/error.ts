import {
  ErrorActionTypes,
  HANDLE_ERROR,
} from "../types/error/errorActions";
import { IError } from "../types/error/error";

const errorReducerDefaultState: IError = { status: false };

const errorReducer = (
  state = errorReducerDefaultState,
  action: ErrorActionTypes,
): IError => {
  switch (action.type) {
    case HANDLE_ERROR:
      return { status: action.status };

    default:
      return state;
  }
};

export default errorReducer;
