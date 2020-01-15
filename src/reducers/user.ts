import { IUser } from "../types/user/user";
import { UserActionTypes, ADD_USER, REMOVE_HOBBY, EDIT_USER, SET_USERS } from "../types/user/userActions";

const userReducerDefaultState: IUser[] = [];

const userReducer = (
  state = userReducerDefaultState,
  action: UserActionTypes,
): IUser[] => {
  switch (action.type) {
    case ADD_USER:
      return [...state, action.user];
    
    case REMOVE_HOBBY:
      return state.map(user => {
        if (user.id === action.id) {
          return {
            ...user,
            hobbies: user.hobbies.filter(hobby => hobby.id !== action.hobbyId),
          };
        }
        return user;
      });

    case EDIT_USER:
      return state.map((user) => {
        if (user.id === action.id) {
          return {
            ...user,
            hobbies: [
              ...user.hobbies,
              action.hobby,
            ],
          }
        }
        return user;
      });

    case SET_USERS:
      return action.users;

    default:
      return state;
  }
};

export default userReducer;
