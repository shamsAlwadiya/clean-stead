import React from 'react'
import './style.css'
import image1 from '../../../assests/images/image 1.png'
import { Outlet, Link, NavLink } from 'react-router-dom'
const Header = () => {
  return (

    <div className='header'>

      <button className='btn1'>احجز الان</button>
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
  )
}
export default Header;