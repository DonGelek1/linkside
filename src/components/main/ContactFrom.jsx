import React, { useState } from 'react';
import MaskedInput from 'react-text-mask';
import emailjs from 'emailjs-com';

const ContactForm = () => {
   const [formData, setFormData] = useState({
      name: '',
      phone: ''
   });

   const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      emailjs.send('service_drbibvw', 'template_3dlkho4', formData, 'm2ZP2KG5VDUTa6EIl')
         .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            setFormData({
               name: '',
               phone: ''
            });
         }, (err) => {
            console.log('FAILED...', err);
         });
   };

   return (
      <div id='order' className="contact-form">
         <h2 className="contact-form__title">
            Заполните форму - мы свяжемся с вами в рабочее время и обсудим детали проекта.
         </h2>
         <form className="contact-form__form" onSubmit={handleSubmit}>
            <div className="contact-form__input-group">
               <input
                  type="text"
                  name="name"
                  placeholder="Ваше имя"
                  className="contact-form__input"
                  value={formData.name}
                  onChange={handleChange}
                  required
               />
            </div>
            <div className="contact-form__input-group">
               <MaskedInput
                  mask={['8', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]}
                  placeholder="Введите номер телефона"
                  className="contact-form__input"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  name="phone"
               />
            </div>
            <button type="submit" className="contact-form__submit">
               Отправить
            </button>
         </form>
         <p className="contact-form__privacy">
            Отправляя данные, вы соглашаетесь с <a href="/privacy">политикой конфиденциальности</a>.
         </p>
      </div>
   );
};

export default ContactForm;

//!! Задачи
//?? Сделать модальное окно с анимированой загрузкой */
//?? Решить проблему с smtp сервером */
//?? Создать красивый шаблон письма */