import React from 'react';
import 'assets/css/components/atoms/CancelButton.css';

const CancelButton:React.FC<{onClick: any}> = (onClick) => {
  return (
    <button onClick={() => onClick} className='cancel-button button'>
      <p className='button__text text_color--black'>Cancel</p>
    </button>
  )
};

export default CancelButton;