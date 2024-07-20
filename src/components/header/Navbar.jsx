import React, { useState } from 'react';
import './header.scss';

const Navbar = () => {
   const [active, setActive] = useState(false);

   const links = [
      { name: 'Главная', path: '/' },
      { name: 'О компании', path: '#about' },
      { name: 'Галерея', path: '#projects' },
      { name: 'Услуги', path: '#services' },
      { name: 'Контакты', path: '#social' },
   ];

   return (
      <nav className='header__menu'>
         <ul onClick={() => setActive(false)} className={active ? 'header__list active' : 'header__list'}>
            {links.map(link => (
               <li key={link.name}>
                  <a onClick={e => e.stopPropagation()} className='header__link' href={link.path}>{link.name}</a>
               </li>
            ))}
         </ul>
         <div onClick={() => setActive(!active)} className={active ? 'header__burger active' : 'header__burger'}>
            <span></span>
         </div>
      </nav>
   );
};

export default Navbar;

