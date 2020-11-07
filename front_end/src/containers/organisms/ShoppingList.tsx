import React from 'react';
import { Item } from 'types'
import AddItemGuideline from 'containers/organisms/AddItemGuideline'
import 'assets/css/containers/organisms/ShoppingList.css'

type OnClickFunction = () => void

interface Props {
  onClick: OnClickFunction,
  shoppingList: Item[]
}
const ShoppingList:React.FC<Props> = ({ onClick, shoppingList }) => {
  return (
    <div className='shopping-list'>
      <AddItemGuideline onClick={onClick}/>
      <ul className='shopping-list__items'>
        {
          shoppingList.map((item: Item, index: number) => {
            return <li className='list-item' key={index}>{ item.name }</li>
          })
        }
        </ul>
    </div>
  )
};

export default ShoppingList;