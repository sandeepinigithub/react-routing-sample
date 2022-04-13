import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Navigate, Route, Routes } from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent/HeaderComponent'
import HomeComponent from './components/HomeComponent/HomeComponent';
import FeaturesComponent from './components/FeaturesComponent/FeaturesComponent';
import AboutComponent from './components/AboutComponent/AboutComponent';
import WelcomeComponent from './components/WelcomeComponent/WelcomeComponent';


function App() {
  let login:any = JSON.parse(localStorage.getItem('login') || '{}');
  return (
    <>
      <HeaderComponent />
      <main>
        <Routes>
          <Route path='/' element={<WelcomeComponent />} />
          {login?.isLoggedIn && <Route path='/home' element={<HomeComponent />} />}
          {login?.isLoggedIn && <Route path='/features' element={<FeaturesComponent />} />}
          {login?.isLoggedIn && <Route path='/about' element={<AboutComponent />} />}
          {login?.isLoggedIn && <Route path='/about/:name' element={<AboutComponent />} />}
          {login?.isLoggedIn && <Route path='/*' element={<Navigate to="/" replace />} />}
        </Routes>
      </main>
    </>
  );
}

export default App;
