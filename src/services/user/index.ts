import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { uuid } from 'uuidv4';

// MOCK DATA
const mock = new MockAdapter(axios);
mock.onGet('/users').reply(
  200,
  {
    data: [
      {
        id: uuid(),
        name: 'John',
        hobbies: [],
      },
      {
        id: uuid(),
        name: 'Peter',
        hobbies: [
          {
            id: uuid(),
            passionLevel: 'Medium',
            description: 'Playing footbal',
            since: 2014,
          },
          {
            id: uuid(),
            passionLevel: 'High',
            description: 'Listening to music',
            since: 2007,
          },
          {
            id: uuid(),
            passionLevel: 'Low',
            description: 'Going to Concert',
            since: 2015,
          },
          {
            id: uuid(),
            passionLevel: 'Very-High',
            description: 'Coding',
            since: 2016,
          },
        ],
      },
      {
        id: uuid(),
        name: 'Marcus',
        hobbies: [],
      },
    ]
  }
);

const getListOfUser = async () => axios('/users');

export default {
  getListOfUser,
};
