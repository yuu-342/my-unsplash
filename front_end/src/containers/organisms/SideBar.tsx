import React from 'react';
import Logo from 'assets/images/logo.svg';
import CartButton from 'components/atoms/CartButton';
import 'assets/css/containers/organisms/SideBar.css';

const SideBar: React.FC = () => {
  return (
    <div className='sidebar'>
      <img src={Logo} alt='logo' className='sidebar__img'/>
      <CartButton />
    </div>
  )
};

export default  SideBar;