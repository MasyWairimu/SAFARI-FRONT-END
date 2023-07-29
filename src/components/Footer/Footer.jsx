import React, { useEffect } from 'react';
import './footer.css';
import {FiSend} from 'react-icons/fi'
import {MdOutlineTravelExplore} from 'react-icons/md';
import {AiOutlineInstagram} from 'react-icons/ai';
import {FiFacebook} from 'react-icons/fi';
import {AiFillTwitterCircle} from 'react-icons/ai';
import {AiOutlineYoutube} from 'react-icons/ai';
import {FaTripadvisor} from 'react-icons/fa';
import {FiChevronRight} from 'react-icons/fi';
import elephant from '../../assets/videos/elephants.mp4'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

  useEffect(()=>{
      Aos.init({duration: 2000})
  }, [])

  return (
    <section className="footer">
      <div  className="videoDiv">
        <video src={elephant} loop autoPlay muted type = 'video/mp4'></video>
      </div>

      <div className="secContent container">
        <div className="contactsDiv flex">
          <div data-aos = "fade-up" className="text">
          <small>KEEP IN TOUCH</small>
          <h2>Travel with us</h2>
          </div>

          <div data-aos = "fade-up" className="inputDiv flex">
            <input data-aos = "fade-up" type="text" placeholder='Enter email address' />
            <button data-aos = "fade-up" className='btn flex' type='submit'>
              SEND <FiSend className = 'icon' />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div data-aos = "fade-up" className="logoDiv">
              <a href="#" className="logo flex">
                <MdOutlineTravelExplore className='icon' /> Travel.
              </a>
            </div>

            <div data-aos = "fade-up" className="footerParagraph">
            the newspapers are the storehouse of day-to-day happenings in the world. They add to our knowledge not only about our own country but also about world affairs. 
            </div>

            <div data-aos = "fade-up" className="footerSocials flex">
              <AiOutlineInstagram className='icon' />
              <FiFacebook className='icon' />
              <AiFillTwitterCircle className='icon' />
              <AiOutlineYoutube className='icon' />
              <FaTripadvisor className='icon' />
            </div>
          </div>
          <div className="footerLinks grid">
            <div data-aos = "fade-up" data-aos-duration = '3000' className="linkGroup">
              <span className="groupTitle">
                OUR AGENCY
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icon' /> Services
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' /> Insurance
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' /> Agency
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' /> Payment
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' /> Tourism
              </li>
            </div>

            <div className="footerDiv flex">
              <small>SAFIRI KENYA WEBSITE THEME</small>
              <small>COPYRIGHTS RESERVED - MERCYWAIRIMU 2023</small>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
};

export default Footer;
