import React from 'react';
import AddItemGuideline from 'containers/organisms/AddItemGuideline'
import 'assets/css/containers/organisms/ShoppingList.css'

const ShoppingList = () => {
  return (
    <div className='shopping-list'>
      <AddItemGuideline />
    </div>
  )
};

export default ShoppingList;