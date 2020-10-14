import React from 'react';
import 'assets/css/components/atoms/AddItemButton.css'

interface Props {
  onClick: any
}

const AddItemButton:React.FC<Props> = ({ onClick }) => {
  return (
    <div className='add-item-button' onClick={onClick}>
      <p className='add-item-button__text'>Add Item</p>
    </div>
  )
};

export default AddItemButton;