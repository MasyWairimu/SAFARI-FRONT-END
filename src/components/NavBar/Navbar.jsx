import React, {useState} from 'react';
import {AiFillCloseCircle} from 'react-icons/ai';
import {TbGridDots} from 'react-icons/tb';
import './navbar.css';
import giraffe  from '../../assets/pictures/giraffe.jpg';

function Navbar(){
  const [active, setActive] =  useState('navBar');

  //function to toggle Navbar
  const showActive = () => {
    setActive('navBar activeNavbar');
  }

  //function to remove Navbar
  const removeNavBar = () => {
    setActive('navBar');
  }

  return (
    <section className="navBarSection">
       <header className="header flex">
 
         <div className="logoDiv">
           <a href="#" className="logo flex">
             <h1>Safari.</h1> <img src={giraffe} alt="giraffe" className='icon' />
           </a>
         </div>
 
         <div className= {active}>
           <ul className="navLists flex">
             <li className="navItem">
               <a href="#" className="navLink">Home</a>
             </li>
             <li className="navItem">
               <a href="#" className="navLink">Packages</a>
             </li>
             <li className="navItem">
               <a href="#" className="navLink">Shop</a>
             </li>
             <li className="navItem">
               <a href="#" className="navLink">About</a>
             </li>
             <li className="navItem">
               <a href="#" className="navLink">Pages</a>
             </li>
             <li className="navItem">
               <a href="#" className="navLink">News</a>
             </li>
             <li className="navItem">
               <a href="#" className="navLink">Contacts</a>
             </li>
             <button className="btn">
               <a href="#">BOOK NOW</a>
             </button>
           </ul>
 
           <div onClick={removeNavBar}  className="closeNavbar">
             <AiFillCloseCircle className= 'icon'/>
           </div>
         </div>

         <div onClick={showActive}  className="toggleNavbar">
             <TbGridDots className = 'icon' />
         </div>
       </header>
    </section>
   )
};

export default Navbar;
