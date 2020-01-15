import React from 'react';
import { IHobby } from '../../types/user/user';

type HobbiesListProps = {
  hobbies: IHobby[],
  onRemoveHobby: (id: string) => void,
};

const HobbiesList = ({ hobbies, onRemoveHobby }: HobbiesListProps) => {
  return (
    <ul className='hobbies-list-container'>
      {
        hobbies.length
          ? hobbies.map((hobby: IHobby) => 
            <li key={hobby.id}>
              <span>Pasion: {hobby.passionLevel}</span>
              <span>{hobby.description}</span>
              <span>Since {hobby.since}</span>
              <span onClick={() => onRemoveHobby(hobby.id)}><span className='square' /></span>
            </li>
          )
          : null
      }
    </ul>
  );
}

export default HobbiesList;
