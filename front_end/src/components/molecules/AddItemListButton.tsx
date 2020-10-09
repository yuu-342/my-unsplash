import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import 'assets/css/components/molecures/AddItemListButton.css';

type Item = {
  id: number;
  name: string;
  note: string;
  image_url: string;
  category_id: number;
}

interface Props {
  item: Item,
}

const AddItemListButton: React.FC<Props> = ({ item }) => {
  return (
    <div className='add-item-list-button'>
      <p className='item-name'>{ item.name }</p>
      <FontAwesomeIcon icon={faPlus} className='plus-icon'/>
    </div>
  )
};

export default AddItemListButton;