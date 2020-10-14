import React from 'react';
import AddItemButton from 'components/atoms/AddItemButton';
import Bottle from 'assets/images/source.svg';
import 'assets/css/containers/organisms/AddItemGuideline.css'

interface Props {
  func: void
}
const AddItemGuideline:React.FC<Props> = ({ func }) => {
  return (
    <div className='add-item-guideline'>
      <img src={Bottle} className='bottle'/>
      <div className='guideline__wrap'>
        <p className='guideline__text'>Didn't find what you need?</p>
        <AddItemButton onClick={func}/>
      </div>
    </div>
  )
};

export default  AddItemGuideline;