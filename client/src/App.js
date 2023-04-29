import './App.css';
import {  Route, Routes } from 'react-router-dom';
import  DetailCard  from './components/Page/DetailCard/DetialCard.jsx';
import Home from './components/Page/Home/Home.jsx';
import  Landing  from './components/Page/Landing/Landing.jsx';
import CreatedActivity from './components/Page/CreatedActivity/CreatedActivity.jsx';
import React from 'react';
import AboutMe from './components/Page/AboutMe/AboutMe.jsx'
import AboutProject from './components/Page/AboutProject/AboutProject.jsx';
//  <Route exact path='/detail/:detailId' element={<DetailCard/>} />

function App() {
  return (
    <div className='App'>

      <Routes>

      <Route exact path='/' element={<Landing/>} />
      <Route exact path='/home' element={<Home/>} />
      <Route exact path='/activityCreate' element={<CreatedActivity/>} /> 
      <Route exact path='/detail/:detailId' element={<DetailCard/>} />
      <Route exact path='/aboutMe' element={<AboutMe/>} />
      <Route exact path='/aboutProject' element={<AboutProject/>} />


      </Routes>

    </div>
  );
}

export default App;