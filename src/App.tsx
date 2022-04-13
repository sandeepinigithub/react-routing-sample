import React from 'react';
import logo from './logo.svg';
import './App.scss';
import {Navigate, Route,Routes} from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent/HeaderComponent'
import HomeComponent from './components/HomeComponent/HomeComponent';
import FeaturesComponent from './components/FeaturesComponent/FeaturesComponent';
import AboutComponent from './components/AboutComponent/AboutComponent';


function App() {
  return (
    <>  
    <HeaderComponent/>
    <main>
      <Routes>
        <Route path='/' element={<HomeComponent/>}/>
        <Route path='/home' element={<HomeComponent/>}/>
        <Route path='/features' element={<FeaturesComponent/>}/>
        <Route path='/about' element={<AboutComponent/>}/>
        <Route path='/about/:name' element={<AboutComponent/>}/>
        <Route path='/*' element={<Navigate to="/" replace />}/>
      </Routes>
    </main>
    </>
  );
}

export default App;
