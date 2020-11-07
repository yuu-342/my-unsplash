import React from 'react';
import { Item, ItemList } from 'types';
import AddItemListButton from 'components/molecules/AddItemListButton'
import 'assets/css/containers/organisms/CategoryBox.css';

interface Props {
  itemList: ItemList,
  onClick: any
}

const CategoryBox: React.FC<Props> = ({ itemList, onClick }) => {
  return (
    <div className='category-box'>
      <h2 className='category-name'>{ itemList.name }</h2>
      <ul className='item-list'>
        {
          itemList.items.map((item: Item) => {
            return <AddItemListButton onClick={onClick} item={item} key={item.id}/>
          })
        }
      </ul>
    </div>
  )
};

export default CategoryBox;