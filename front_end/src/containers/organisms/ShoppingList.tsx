import React from 'react';
import AddItemGuideline from 'containers/organisms/AddItemGuideline'
import 'assets/css/containers/organisms/ShoppingList.css'

interface Props {
  func: any
}
const ShoppingList:React.FC<Props> = ({ func }) => {
  return (
    <div className='shopping-list'>
      <AddItemGuideline func={func}/>
    </div>
  )
};

export default ShoppingList;