import React from 'react';
import { IUser } from '../../types/user/user';

type UserListProps = {
  users: IUser[],
  onClick: (id: string) => void,
  selectedUser: string,
};

const UserList = ({ users, selectedUser, onClick }: UserListProps) => {
  return (
    <ul className='user-list-container'>
      {
        users.map((user: IUser) =>
          <li
            key={user.id}
            className={user.id === selectedUser ? 'user-list-container-active' : 'user-list-container-inactive'}
            onClick={() => onClick(user.id)}
          >
            {user.name}
          </li>
        )
      }
    </ul>
  );
}

export default UserList;
