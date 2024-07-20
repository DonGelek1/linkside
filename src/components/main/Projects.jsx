import React, { useState } from 'react';
import Slider from 'react-slick';
import sliderData from './SliderData';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
   const [currentCategory, setCurrentCategory] = useState('electrics');
   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
   const [selectedImage, setSelectedImage] = useState(null);

   const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      swipe: true
   };

   const categories = [
      { key: 'electrics', label: 'Электрика' },
      { key: 'heating', label: 'Отопление' },
      { key: 'underfloorHeating', label: 'Теплые полы' },
      { key: 'waterSupply', label: 'Водоснабжение' },
      { key: 'sewerage', label: 'Канализация' },
      { key: 'ventilationSystem', label: 'Вентиляция' },
      { key: 'airConditioning', label: 'Кондиционирование' },
      { key: 'fireAlarm', label: 'Сигнализация' },
      { key: 'smartHome', label: 'Умный дом' },
      { key: 'radiatorsConvectors', label: 'Радиаторы' }
   ];

   const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
   };

   const handleImageClick = (image) => {
      setSelectedImage(image === selectedImage ? null : image);
   };

   const renderSlides = (category) => {
      return sliderData[category].map((slide, index) => (
         <div key={index} className={`projects__slide ${selectedImage === slide.src ? 'projects__slide--selected' : ''}`} onClick={() => handleImageClick(slide.src)}>
            <img src={slide.src} alt={slide.alt} className="projects__image" />
         </div>
      ));
   };

   return (
      <section id='projects' className="projects">
         <h2 className="projects__title">Галерея</h2>
         <div className="projects__tabs">
            {categories.map((category) => (
               <button
                  key={category.key}
                  className={`projects__tab ${currentCategory === category.key ? 'projects__tab--active' : ''}`}
                  onClick={() => setCurrentCategory(category.key)}
               >
                  {category.label}
               </button>
            ))}
         </div>
         <div className={`projects__dropdown ${isDropdownOpen ? 'projects__dropdown--active' : ''}`}>
            <button className="projects__dropdown-button--active" onClick={toggleDropdown}>
               {categories.find(category => category.key === currentCategory)?.label}
            </button>
            <div className={`projects__dropdown-content ${isDropdownOpen ? 'projects__dropdown-content--active' : ''}`}>
               {categories.map((category) => (
                  <button
                     key={category.key}
                     className="projects__dropdown-item"
                     onClick={() => {
                        setCurrentCategory(category.key);
                        toggleDropdown();
                     }}
                  >
                     {category.label}
                  </button>
               ))}
            </div>
         </div>
         <div className="projects__carousel">
            <Slider {...settings}>
               {renderSlides(currentCategory)}
            </Slider>
         </div>
         {selectedImage && (
            <div className="projects__overlay" onClick={() => setSelectedImage(null)}>
               <img src={selectedImage} alt="Selected" className="projects__overlay-image" />
            </div>
         )}
      </section>
   );
}

export default Projects;
