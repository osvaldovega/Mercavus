
export interface IHobby {
  id: string;
  passionLevel: string;
  description: string;
  since: string;
};

export interface IUser {
  id: string;
  name: string;
  hobbies: IHobby[];
};