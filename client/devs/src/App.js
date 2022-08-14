import './App.css';
import React from 'react';
import { Reset } from "styled-reset";
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
// Componenets
import LandingPage from './components/landing/LandingPage';
import LoginPage from './components/login/LoginPage';
import SearchPage from './components/search/SearchPage';
import SearchResultPage from './components/search/SearchResultPage';
import ProfilePage3 from './components/profile/profile3/ProfilePage3';
import MainPage from './components/main/MainPage';
import ProfilePage from './components/profile/ProfilePage';
import NavigationBar from './components/NavigationBar';
import Profile from './components/profile/Profile';
import ImageEdit from './components/profile/edit/ImageEdit';

const App = () => {

  axios.defaults.xsrfCookieName = 'csrftoken'
  axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN'

  return (
    <div className='font'>
      <Reset />

      <NavigationBar />

      <Routes>
        {/* Landing Page & Register */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Login */}
        <Route path="/login" element={<LoginPage />} />

        {/* Search Page */}
        <Route path="/search" element={<SearchPage />} />

        {/*Search Result Page*/}
        <Route path="/searchresult" element={<SearchResultPage />} />

        {/*Profile Page 3*/}
        {/* <Route path="/profile3" element={<ProfilePage3 />} /> */}

        {/*Main Page*/}
        <Route path="/main" element={<MainPage/>} />

        {/* Profile Page */}
        <Route path="/profile/:user_id" element={<Profile />}>
          <Route path="" element={<ProfilePage />} />
          <Route path="post/:category/:name" element={<ProfilePage3 />} />
          <Route path="image" element={<ImageEdit />} />
        </Route>

      </Routes>
    </div>
  );
};

export default App;
