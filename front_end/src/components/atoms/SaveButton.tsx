import React from 'react';
import 'assets/css/components/atoms/SaveButton.css';

type OnClickFunction = () => void

const SaveButton:React.FC<{onClick: OnClickFunction}> = ({ onClick }) => {
  return (
    <button onClick={() => onClick()} className='save-button button' type='submit'>
      <p className='button__text text_color--white'>Save</p>
    </button>
  )
};

export default SaveButton;