import React from 'react';
import AddItemGuideline from 'containers/organisms/AddItemGuideline'
import 'assets/css/containers/organisms/ShoppingList.css'

type OnClickFunction = () => void

interface Props {
  onClick: OnClickFunction
}
const ShoppingList:React.FC<Props> = ({ onClick }) => {
  return (
    <div className='shopping-list'>
      <AddItemGuideline onClick={onClick}/>
    </div>
  )
};

export default ShoppingList;