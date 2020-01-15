import { IUser, IHobby } from "./user";

export const ADD_USER = 'ADD_USER';
export const EDIT_USER = 'EDIT_USER';
export const REMOVE_HOBBY = 'REMOVE_HOBBY';
export const SET_USERS = 'SET_USERS';

export interface addUserAction {
  type: typeof ADD_USER;
  user: IUser
};

export interface editUserAction {
  type: typeof EDIT_USER;
  id: string;
  hobby: IHobby;
};

export interface removeHobbyAction {
  type: typeof REMOVE_HOBBY;
  id: string;
  hobbyId: string;
};

export interface setUsersAction {
  type: typeof SET_USERS;
  users: IUser[];
};

export type UserActionTypes = addUserAction
  | removeHobbyAction
  | editUserAction
  | setUsersAction;
