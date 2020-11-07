import React, { useCallback } from 'react';
import { Item } from 'types';
import 'assets/css/containers/organisms/ItemInfo.css';
import Avocado from 'assets/images/avocado.jpg';
import SubmitOrCancelForm from 'components/molecules/SubmitOrCancelForm';

interface Props {
  item: Item,
  addToList: any,
  cancelFunc: any,
}

const ItemInfo:React.FC<Props> = ({ item, addToList, cancelFunc }) => {
  return (
    <div className='item-info'>
      <div className='info__area'>
        <button onClick={() => {console.log('test')}}>← back</button>
        <img src={ Avocado } className='item__image' alt=''/>
        <div className='content__area'>
          <p>category</p>
          <p>{ item.category_id }</p>
        </div>
        <div className='content__area'>
          <p>name</p>
          <p>{ item.name }</p>
        </div>
        <div className='content__area'>
          <p>note</p>
          <p>{ item.note }</p>
        </div>
        <SubmitOrCancelForm onSubmit={addToList} onClick={cancelFunc}/>
      </div>
    </div>
  )
};

export default ItemInfo;