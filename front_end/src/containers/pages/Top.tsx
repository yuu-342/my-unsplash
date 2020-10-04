import React from 'react';
import SideBar from 'containers/organisms/SideBar';
// import ShoppingList from 'containers/organisms/ShoppingList';
import AddItemForm from 'containers/organisms/AddItemForm';
import 'assets/css/pages/Top.css';

const Top: React.FC = ()=> {
  return (
    <div className='container'>
      <SideBar/>
      <AddItemForm />
    </div>
  )
};

export default Top;