import React from 'react';
import AddItemListButton from 'components/molecules/AddItemListButton'
import 'assets/css/containers/organisms/CategoryBox.css';

type Item = {
  id: number;
  name: string;
  note: string;
  image_url: string;
  category_id: number;
}

type Category = {
  id: number;
  name: string;
  items: Item[];
}


interface Props {
  category: Category,
}

const CategoryBox: React.FC<Props> = ({ category }) => {
  return (
    <div className='category-box'>
      <h2 className='category-name'>{ category.name }</h2>
      <ul className='item-list'>
        {
          category.items.map((item: Item) => {
            return <AddItemListButton item={item} key={item.id}/>
          })
        }
      </ul>
    </div>
  )
};

export default CategoryBox;