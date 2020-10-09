import React from 'react';
import 'assets/css/components/atoms/SaveButton.css';

const SaveButton:React.FC<{onClick: any}> = (onClick) => {
  return (
    <button onClick={() => onClick}>
      <div className='save-button'>
        <p className='save-button__text'>Save</p>
      </div>
    </button>
  )
};

export default SaveButton;