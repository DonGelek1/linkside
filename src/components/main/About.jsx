import React from 'react';

const About = () => {
   return (
      <section id='about' className="about">
         <div className="about__content">
            <h2 className='about__title'>О компании</h2>
            <div className="about__items">
               <div className="about__item">
                  {/* <img src="path/to/your/icon1.png" alt="10 лет опыта" className="about__icon" /> */}
                  <h3 className="about__item-title">Более 10 лет <br />опыта</h3>
                  <p className="about__item-text">Который позволяет выполнять проекты любой сложности.</p>
               </div>
               <div className="about__item">
                  {/* <img src="path/to/your/icon2.png" alt="Команда профессионалов" className="about__icon" /> */}
                  <h3 className="about__item-title">Команда профессионалов</h3>
                  <p className="about__item-text">Знают все нюансы работы и качественно выполняют проект.</p>
               </div>
               <div className="about__item">
                  {/* <img src="path/to/your/icon3.png" alt="Комплексный подход" className="about__icon" /> */}
                  <h3 className="about__item-title">Комплексный подход</h3>
                  <p className="about__item-text">Полный спектр услуг для реализации вашего проекта под ключ.</p>
               </div>
               <div className="about__item">
                  {/* <img src="path/to/your/icon4.png" alt="Собственный парк спецтехники" className="about__icon" /> */}
                  <h3 className="about__item-title">500+ завершенных проектов</h3>
                  <p className="about__item-text">Позволяет нам значительно сокращать сроки выполнения работ.</p>
               </div>
            </div>
         </div>
      </section>

   );
};

export default About;
