import React from 'react';
import iOne from './assets/image 1.jpg';
import iTwo from './assets/image 2.jpg';
import iThree from './assets/image 3.jpg';
import iFour from './assets/image 4.jpg';
import iFive from './assets/image 5.jpg';
import isix from './assets/image 6.jpg';
import inst from './assets/inst.png';
import wa from './assets/WA.png';

const Social = () => {
   return (
      <section id='social' className="social">
         <h2 className="social__title">Социальные сети </h2>
         <div className="social__container">
            <div className="social__card">
               <div className="social__header">
                  <img src={inst} alt="Instagram" className="social__icon" />
                  <h3 className="social__platform">Instagram</h3>
                  <a href="https://www.instagram.com/linksidekz?igsh=MTRwNjlsZ3RuMzFkag==" target="_blank" rel="noopener noreferrer" className="social__button">
                     ПОДПИСАТЬСЯ
                  </a>
               </div>
               <div className="social__images">
                  <img src={iOne} alt="image1" className="social__image" />
                  <img src={iTwo} alt="image2" className="social__image" />
                  <img src={iThree} alt="image3" className="social__image" />
                  <img src={iFour} alt="image4" className="social__image" />
                  <img src={iFive} alt="image5" className="social__image" />
                  <img src={isix} alt="image6" className="social__image" />
               </div>
            </div>
            <div className="social__card">
               <div className="social__header">
                  <img src={wa} alt="WhatsApp" className="social__icon" />
                  <h3 className="social__platform">WhatsApp</h3>
                  <a href="https://wa.me/+77473940576" target="_blank" rel="noopener noreferrer" className="social__button">
                     НАПИСАТЬ
                  </a>
               </div>
               <div className="social__content">
                  <p>Для получения дополнительной информации и по всем вопросам, пожалуйста, напишите нам. Мы всегда готовы ответить на ваши запросы и предоставить необходимую консультацию.</p>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Social;
