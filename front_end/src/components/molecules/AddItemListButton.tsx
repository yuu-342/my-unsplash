import React from 'react';
import { Item } from 'types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import 'assets/css/components/molecures/AddItemListButton.css';


interface Props {
  item: Item,
  onClick: any
}

const AddItemListButton: React.FC<Props> = ({ item, onClick }) => {
  return (
    <button className='add-item-list-button' onClick={() => onClick(item)}>
      <p className='item-name'>{ item.name }</p>
      <FontAwesomeIcon icon={faPlus} className='plus-icon'/>
    </button>
  )
};

export default AddItemListButton;