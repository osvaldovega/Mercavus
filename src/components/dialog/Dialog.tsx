import React from 'react';

type IDialogProps = {
  title: string;
  text: string;
  handleAction1: () => void;
  handleAction2: () => any;
  btnLabel1: string;
  btnLabel2: string;
  isDialogOpen: boolean;
};

const Dialog = ({
  title,
  text,
  handleAction1,
  handleAction2,
  btnLabel1,
  btnLabel2,
  isDialogOpen,
}: IDialogProps) => {
  return (
    <div className={`${isDialogOpen ? 'modal show' : 'modal hide'}`}>
      <div className='dialog-container'>
        <header><h1>{title}</h1></header>
        <div>{text}</div>
        <footer>
          <button onClick={handleAction1}>{btnLabel1}</button>
          <button onClick={handleAction2}>{btnLabel2}</button>
        </footer>
      </div>
    </div>
  );
}

export default Dialog;
