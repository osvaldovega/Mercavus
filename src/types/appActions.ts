import { UserActionTypes } from "./user/userActions";
import { ErrorActionTypes } from "./error/errorActions";

export type AppActions = UserActionTypes | ErrorActionTypes;