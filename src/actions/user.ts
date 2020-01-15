import { Dispatch } from 'redux';
import { uuid } from 'uuidv4';
import { IUser, IHobby } from "../types/user/user";
import { AppActions } from "../types/appActions";
import API from '../services';
import { updateError } from './error';
import {
  ADD_USER,
  EDIT_USER,
  REMOVE_HOBBY,
  SET_USERS,
} from '../types/user/userActions';


export const addUser = (name: string): AppActions => ({
  type: ADD_USER,
  user: {
    id: uuid(),
    name,
    hobbies: [],
  },
});

export const editUser = (id: string, hobby: IHobby): AppActions => ({
  type: EDIT_USER,
  id,
  hobby,
});

export const removeHobby = (id: string, hobbyId: string): AppActions => ({
  type: REMOVE_HOBBY,
  id,
  hobbyId,
});

export const setUsers = (users: IUser[]): AppActions => ({
  type: SET_USERS,
  users,
});

// THUNK
export const getListOfUsers = () => async (dispatch: Dispatch<AppActions>) => {
  try {
    const users = await API.user.getListOfUser();
    dispatch(setUsers(users.data.data));
  } catch (error) {
    dispatch(updateError(true));
  }
  return;
};
