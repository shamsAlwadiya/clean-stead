import React from 'react'
import Header from '../../common/siteLayout/Header';
import Footer from '../../common/siteLayout/Footer'
import CleanService from '../../pages/home/clean-service'
import { ClientSays } from './client-says';
import WhyChooseUs from './Why-choose-us';
import image1 from '../../assests/images/image 1.png'
import { Slider } from './slider';
import { Link } from 'react-router-dom';
import './style.css'

export const Home = () => {
  return (
    <>

      <div className='header'>
        
        <button className='btn1'>احجز الان</button>
        <button className='btn-contact-us'>دخول</button>
        <ul>
          <li><Link to='/contact'>اتصل بنا</Link></li>
          <li><Link to='/about'>من نحن</Link></li>
          <li><Link to='/services'>الخدمات</Link></li>
          <li><Link to='/'>الرئيسية</Link></li>
        </ul>

        <div className='cleanstead'>كلين
          <span > ستيد
            <img src={image1} alt="" />
          </span>
        </div>


      </div>
      <Slider />
      <CleanService />
      <WhyChooseUs />
      <ClientSays />

    </>
  )
}
export default Home;