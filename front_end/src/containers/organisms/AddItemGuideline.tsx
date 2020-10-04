import React from 'react';
import AddItemButton from 'components/atoms/AddItemButton';
import Bottle from 'assets/images/source.svg';
import 'assets/css/containers/organisms/AddItemGuideline.css'

const AddItemGuideline = () => {
  return (
    <div className='add-item-guideline'>
      <img src={Bottle} className='bottle'/>
      <div className='guideline__wrap'>
        <p className='guideline__text'>Didn't find what you need?</p>
        <AddItemButton />
      </div>
    </div>
  )
};

export default  AddItemGuideline;