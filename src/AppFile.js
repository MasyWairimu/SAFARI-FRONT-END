import React from 'react';
import './AppFile.css';
import Home from './components/Home/Home';
import Navbar from './components/NavBar/Navbar';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';

function AppFile() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Main/>
      <Footer/>
    </>
  )
}

export default AppFile;
