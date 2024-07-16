import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Main from './components/main/Main';
import PrivacyPolicy from './components/PrivacyPolicy';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/privacy' element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
