import React from 'react';

type AddUserProps = {
  value: string,
  onChange?: React.ChangeEventHandler<HTMLInputElement>,
  onClick: () => void,
};

const AddUser = ({ value, onChange, onClick }: AddUserProps) => (
  <div className='user-form-container'>
    <input
      name='username'
      value={value}
      onChange={onChange}
      className='user-form-container-input'
      placeholder='Enter username'
    />
    <button
      className='user-form-container-button'
      onClick={onClick}
      disabled={value === ''}
    >
      Add
    </button>
  </div>
);

export default AddUser;
