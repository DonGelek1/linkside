import React from 'react';
import servicesData from './ServicesData';

const Services = () => {
   return (
      <section id='services' className="services">
         <h2 className="services__title">Наши услуги</h2>
         <div className="services__grid">
            {servicesData.map((service, index) => (
               <div className="service-card" key={index}>
                  <img src={service.image} alt={service.title} loading="lazy" className="service-card__image" />
                  <h3 className="service-card__title">{service.title}</h3>
                  <ul className="service-card__description">
                     {service.description.map((desc, index) => (
                        <li key={index}>{desc}</li>
                     ))}
                  </ul>
                  <a href='#order' className="service-card__button">Заказать услугу</a>
               </div>
            ))}
         </div>
      </section>
   );
}

export default Services;
