import { IUser, IHobby } from '../../types/user/user';
import { IError } from '../../types/error/error';

export interface IStateProps {
  users: IUser[],
  error: IError
};

export interface IState {
  username: string,
  passionLevel: string,
  description: string,
  since: string,
  userId: string,
  isDialogOpen: boolean,
  hobby: string,
  hobbyId: string,
};

export interface IDispatchProps {
  addUser: (name: string) => void;
  editUser: (id: string, hobbies: IHobby) => void;
  getListOfUsers: () => void;
  removeHobby: (userId: string, hobbyId: string) => void;
};
