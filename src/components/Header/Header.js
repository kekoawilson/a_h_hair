import React, { Component } from 'react';
import 'reset-css';
import './Header.css';

import menu from '../../assets/002-menu.svg';
import cart from '../../assets/001-cart-of-ecommerce.svg';
// import logo from '../../assets/logo.png';


class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className='menu_container'>
          <img className='menu' src={ menu } alt='Hamburger menu icon' />
        </div>

        <div className='cart_container'>
          <img className='cart' src={ cart } alt='Shopping cart icon' />
        </div>

        <div className='sign-in_container'>
          <a href={ process.env.REACT_APP_LOGIN }><button>Sign in</button></a>
        </div>


      </div>
    );
  }
}

export default Header;