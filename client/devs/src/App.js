import './App.css';
import React from 'react';
import { Reset } from "styled-reset";
import { Route, Routes } from 'react-router-dom';

// Componenets
import LandingPage from './components/landing/LandingPage';
import LoginPage from './components/login/LoginPage';

const App = () => {
  return (
    <div className='font'>
      <Reset />
      
      <Routes>
        {/* Landing Page */}
        <Route path="/landing" element={<LandingPage />} />
        {/* Login */}
        <Route path="/login" element={<LoginPage />} />

      </Routes>
    </div>
  );
};

export default App;
