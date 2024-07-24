import React, { useState } from 'react';
import MaskedInput from 'react-text-mask';
import emailjs from 'emailjs-com';
import error from './assets/error.png';
import success from './assets/success.gif';
import loading from './assets/loading.gif';

const ContactForm = () => {
   const [formData, setFormData] = useState({
      name: '',
      phone: ''
   });

   const [status, setStatus] = useState(null);

   const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      setStatus('loading');

      emailjs.send('service_n7idxk4', 'template_8andxa7', formData, 'BvpoNXlt-Mb9QKxCv')
         .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            setFormData({
               name: '',
               phone: ''
            });
            setStatus('success');
         }, (err) => {
            console.log('FAILED...', err);
            setStatus('error');
         });
   };

   const closeModal = () => {
      setStatus(null);
   };

   const handleModalClick = (e) => {
      if (e.target.classList.contains('modal')) {
         closeModal();
      }
   };

   return (
      <section id='order' className="contact-form">
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
                  type='tel'
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
         {status && (
            <div className="modal" onClick={handleModalClick}>
               <div className="modal__content">
                  {status === 'loading' && <img src={loading} alt="Loading" />}
                  {status === 'success' && <img src={success} alt="Success" />}
                  {status === 'error' && (
                     <div>
                        <img src={error} alt="Error" />
                        <p>Что-то пошло не так. Попробуйте снова.</p>
                     </div>
                  )}
                  <button onClick={closeModal} className="modal__close">&times;</button>
               </div>
            </div>
         )}
      </section>
   );
};

export default ContactForm;
