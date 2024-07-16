import React, { useEffect, useState } from 'react';

const Info = () => {
   const [status, setStatus] = useState('Оффлайн');

   useEffect(() => {
      const checkStatus = () => {
         const currentTime = new Date();
         const aktauTime = new Date(currentTime.toLocaleString('en-US', { timeZone: 'Asia/Aqtau' }));
         const hours = aktauTime.getHours();
         const isOnline = hours >= 9 && hours < 18;
         setStatus(isOnline ? 'Онлайн' : 'Оффлайн');
      };

      checkStatus();
      const interval = setInterval(checkStatus, 60000);
      return () => clearInterval(interval);
   }, []);
   return (
      <div className="hero__contacts">
         <div className="hero__contacts-item">
            <div className="hero__contacts-icon ">
               <svg width="45" height="44" viewBox="0 0 45 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <mask id="mask0_10_237" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="4" y="-1" width="37" height="37">
                     <path fillRule="evenodd" clipRule="evenodd" d="M22.5 0C12.875 0 5 7.875 5 17.5C5 27.125 12.875 35 22.5 35C32.125 35 40 27.125 40 17.5C40 7.875 32.125 0 22.5 0ZM29.8499 24.85L20.7499 19.25V8.75H23.3749V17.85L31.2499 22.575L29.8499 24.85Z" fill="white" />
                     <path d="M29.8499 24.85L29.5878 25.2758L30.0136 25.5379L30.2757 25.1121L29.8499 24.85ZM20.7499 19.25H20.2499V19.5294L20.4878 19.6758L20.7499 19.25ZM20.7499 8.75V8.25H20.2499V8.75H20.7499ZM23.3749 8.75H23.8749V8.25H23.3749V8.75ZM23.3749 17.85H22.8749V18.1331L23.1176 18.2787L23.3749 17.85ZM31.2499 22.575L31.6757 22.8371L31.9407 22.4064L31.5071 22.1463L31.2499 22.575ZM22.5 -0.5C12.5989 -0.5 4.5 7.59886 4.5 17.5H5.5C5.5 8.15114 13.1511 0.5 22.5 0.5V-0.5ZM4.5 17.5C4.5 27.4011 12.5989 35.5 22.5 35.5V34.5C13.1511 34.5 5.5 26.8489 5.5 17.5H4.5ZM22.5 35.5C32.4011 35.5 40.5 27.4011 40.5 17.5H39.5C39.5 26.8489 31.8489 34.5 22.5 34.5V35.5ZM40.5 17.5C40.5 7.59886 32.4011 -0.5 22.5 -0.5V0.5C31.8489 0.5 39.5 8.15114 39.5 17.5H40.5ZM30.1119 24.4242L21.0119 18.8242L20.4878 19.6758L29.5878 25.2758L30.1119 24.4242ZM21.2499 19.25V8.75H20.2499V19.25H21.2499ZM20.7499 9.25H23.3749V8.25H20.7499V9.25ZM22.8749 8.75V17.85H23.8749V8.75H22.8749ZM23.1176 18.2787L30.9926 23.0037L31.5071 22.1463L23.6321 17.4213L23.1176 18.2787ZM30.824 22.313L29.424 24.588L30.2757 25.1121L31.6757 22.8371L30.824 22.313Z" fill="white" />
                  </mask>
                  <g mask="url(#mask0_10_237)">
                     <g filter="url(#filter0_d_10_237)">
                        <rect x="-0.25" y="-5.25" width="45.5" height="45.5" fill="#FFF500" stroke="white" />
                     </g>
                  </g>
                  <defs>
                     <filter id="filter0_d_10_237" x="-4.75" y="-5.75" width="54.5" height="54.5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_10_237" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_10_237" result="shape" />
                     </filter>
                  </defs>
               </svg>
            </div>
            <p className="hero__contacts-text">Сегодня с 09:00 - 18:00</p>
            <p className="hero__contacts-subtext">Рабочее время</p>
         </div>
         <div className="hero__contacts-item">
            <div className="hero__contacts-icon">
               <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <mask id="mask0_10_230" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="35" height="35">
                     <path fillRule="evenodd" clipRule="evenodd" d="M35 0L0 14.6417V16.5472L13.3 21.7L18.4333 35H20.3389L35 0Z" fill="white" />
                  </mask>
                  <g mask="url(#mask0_10_230)">
                     <rect x="-7.77783" y="-7.77777" width="50.5556" height="50.5556" fill="#FFF500" />
                  </g>
               </svg>
            </div>
            <p className="hero__contacts-text">г. Актау 5-9-26</p>
            <p className="hero__contacts-subtext">Адрес</p>
         </div>
         <div className="hero__contacts-item tel">
            <div className="hero__contacts-icon tel ">
               <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <mask id="mask0_10_223" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="35" height="35">
                     <path fillRule="evenodd" clipRule="evenodd" d="M7.03889 15.1472C9.83889 20.65 14.35 25.1417 19.8528 27.9611L24.1306 23.6833C24.6556 23.1583 25.4333 22.9833 26.1139 23.2167C28.2917 23.9361 30.6444 24.325 33.0556 24.325C34.125 24.325 35 25.2 35 26.2694V33.0556C35 34.125 34.125 35 33.0556 35C14.7972 35 0 20.2028 0 1.94444C0 0.875 0.875 0 1.94444 0H8.75C9.81944 0 10.6944 0.875 10.6944 1.94444C10.6944 4.375 11.0833 6.70833 11.8028 8.88611C12.0167 9.56667 11.8611 10.325 11.3167 10.8694L7.03889 15.1472Z" fill="white" />
                  </mask>
                  <g mask="url(#mask0_10_223)">
                     <rect x="-7.77783" y="-7.77777" width="50.5556" height="50.5556" fill="#FFF500" fillOpacity="0.97" />
                  </g>
               </svg>
            </div>
            <p className="hero__contacts-text"><a href="tel:+77764002230">8 (776) 400-22-30</a></p>
            <p className="hero__contacts-subtext">
               {status === 'Онлайн' ? (<><span className='neon-circle-green'></span> Онлайн</>) : (<><span className='neon-circle-red'></span> Оффлайн</>)}</p>
         </div>
      </div >
   );
}

export default Info;
