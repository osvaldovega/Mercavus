import * as actions from './user';
import { EDIT_USER, REMOVE_HOBBY, SET_USERS } from '../types/user/userActions';

describe('User Actions', () => {
 
  it('should crate an action to EDIT user Hobby', () => {
    const id = '123';
    const hobby =  {
      id: '987',
      passionLevel: 'low',
      description: 'coding',
      since: '2019',
    };

    const expectedAction = {
      type: EDIT_USER,
      id,
      hobby
    };

    expect(actions.editUser(id, hobby)).toEqual(expectedAction);
  });

  it('should crate an action to REMOVE user Hobby', () => {
    const id = '123';
    const hobbyId = '987';

    const expectedAction = {
      type: REMOVE_HOBBY,
      id,
      hobbyId
    };

    expect(actions.removeHobby(id, hobbyId)).toEqual(expectedAction);
  });

  it('should crate an action to SET users', () => {
    const users = [{
      id: '123',
      name: 'mercavus',
      hobbies: [],
    }];

    const expectedAction = {
      type: SET_USERS,
      users,
    };

    expect(actions.setUsers(users)).toEqual(expectedAction);
  });
});