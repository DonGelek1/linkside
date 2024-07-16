import React from 'react';
import './footer.scss'; // Assuming you have a corresponding SCSS file for styles
import logo from '../header/Linkside.png'; // Adjust the path to your actual logo image

const Footer = () => {
   return (
      <footer className="footer">
         <div className="footer__content">
            <div className="footer__item">
               <h3 className="footer__title">График работы:</h3>
               <p className="footer__text">Ежедневно с 09:00 - 18:00</p>
            </div>
            <div className="footer__item">
               <h3 className="footer__title">Адрес:</h3>
               <p className="footer__text">130000, Казахстан, Мангистауская обл., г. Актау, 5 мкр., дом 9, офис 26</p>
            </div>
            <div className="footer__item">
               <h3 className="footer__title">Контакты:</h3>
               <p className="footer__text">
                  <a href="tel:+77764002230">8 (776) 400-22-30</a>
               </p>
               <p className="footer__text">Linksidekz@mail.ru</p>
            </div>
         </div>
         <div className="footer__bottom">
            <img src={logo} alt="Linkside Logo" className="footer__logo" />
            <p className="footer__copyright">© 2024 Link Side. All Rights Reserved.</p>
         </div>
      </footer>
   );
};

export default Footer;
