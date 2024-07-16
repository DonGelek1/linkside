import React from 'react';
import './header.scss';
import Navbar from './Navbar';
import logo from './Linkside.png';

const Header = () => {
   return (
      <header className='header'>
         <div className='header__container'>
            <div className='header__logo'>
               <img className='header__img' src={logo} alt="logo" />
            </div>
            <Navbar />
         </div>
      </header>
   );
};

export default Header;
