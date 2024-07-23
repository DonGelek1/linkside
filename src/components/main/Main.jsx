import React from 'react';
import Info from './Info';
import About from './About';
import Projects from './Projects';
import Services from './Services';
import ContactForm from './ContactFrom';
import Social from './Social';
import './main.scss'

const Main = () => {
   return (
      <main id='main' className='main'>
         <div className='main__container'>
            <section className='hero'>
               <div className='hero__content'>
                  <h1 className='hero__title'>Инженерные сети и коммуникации</h1>
                  <p className='hero__description'>
                     Проектирование, установка и обслуживание инженерных систем:
                     электроснабжение, отопление, вентиляция, кондиционирование,
                     водоснабжение, канализация, пожарная и охранная сигнализация.
                  </p>
                  <a href="#order" className='hero__button'>Построить ваш объект</a>
                  <Info />
               </div>
            </section>
            <About />
            <Projects />
            <Services />
            <ContactForm />
            <Social />
         </div>
      </main>
   );
}

export default Main;
