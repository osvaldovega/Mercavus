import userReducer from './user';
import { ADD_USER, REMOVE_HOBBY, EDIT_USER, SET_USERS } from "../types/user/userActions";

describe('User Reducer', () => {
  let initialState: any = [];

  beforeEach(() => {
    initialState = [
      {
        id: '123',
        name: 'mercavus',
        hobbies: [
          {
            id: '987',
            passionLevel: 'low',
            description: 'coding',
            since: '2017',
          },
        ],
      }
    ];
  });

  it('Should return the initial state', () => {
    const action = {
      type: 'TEST',
    };

    expect(userReducer(undefined, action)).toEqual([]);
  });

  it('Should handle ADD_USER', () => {
    const action = {
      type: ADD_USER,
      user: {
        id: '123',
        name: 'mercavus',
        hobbies: [],
      },
    };

    expect(userReducer([], action)).toEqual([{ ...action.user }]);
  });

  it('Should handle REMOVE_HOBBY', () => {
    const action = {
      type: REMOVE_HOBBY,
      id: '123',
      hobbyId: '987',
    };

    const expectedResult = [
      {
        id: '123',
        name: 'mercavus',
        hobbies: [],
      }
    ];

    expect(userReducer(initialState, action)).toEqual(expectedResult);
  });

  it('Should handle EDIT_USER', () => {
    const action = {
      type: EDIT_USER,
      id: '123',
      hobby: {
        id: '456',
        passionLevel: 'medium',
        description: 'read',
        since: '2000',
      },
    };

    const expectedResult = [
      {
        id: '123',
        name: 'mercavus',
        hobbies: [
          {
            id: '987',
            passionLevel: 'low',
            description: 'coding',
            since: '2017',
          },
          {
            id: '456',
            passionLevel: 'medium',
            description: 'read',
            since: '2000',
          },
        ],
      }
    ];

    expect(userReducer(initialState, action)).toEqual(expectedResult);
  });

  it('Should handle SET_USERS', () => {
    const action = {
      type: SET_USERS,
      users: [
        {
          id: '123',
          name: 'mercavus',
          hobbies: [],
        },
        {
          id: '456',
          name: 'vusmerca',
          hobbies: [],
        }
      ],
    };

    const expectedResult = [...action.users];

    expect(userReducer([], action)).toEqual(expectedResult);
  });
});