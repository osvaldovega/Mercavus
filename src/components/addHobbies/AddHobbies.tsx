import React from 'react';
import utils from '../../utils';

type AddHobbiesProps = {
  values: {
    username: string,
    passionLevel: string,
    description: string,
    since: string,
    userId: string,
  },
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement>,
  onAddHobby: () => void,
  isAddHobbyBtnDisabled: boolean,
};

const AddHobbies = ({ values, onChange, onAddHobby, isAddHobbyBtnDisabled}: AddHobbiesProps) => (
  <form className='hobbies-form-container'>
    <select
      name='passionLevel'
      onChange={onChange}
      value={values.passionLevel}
      className='hobbies-form-container-level'
    >
      <option value='default' disabled hidden>Select passion level</option>
      {
        utils.severity().map(severity => <option key={severity} value={severity}>{severity}</option>)
      }
    </select>

    <input
      name='description'
      type='text'
      value={values.description}
      placeholder='Enter user hobby'
      onChange={onChange}
      className='hobbies-form-container-description'
    />
    <select
      name='since'
      value={values.since}
      onChange={onChange}
      className='hobbies-form-container-since'
    >
      <option value='default' disabled hidden>Enter year</option>
      {
        utils.getYearList().map(year => <option key={year} value={year}>{year}</option>)
      }
    </select>

    <input
      type='button'
      value='Add'
      onClick={onAddHobby}
      className='hobbies-form-container-button'
      disabled={isAddHobbyBtnDisabled}
    />
  </form>
);

export default AddHobbies;
